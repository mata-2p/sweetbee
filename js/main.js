
const stringToHTML = (s) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(s, 'text/html')

  return doc.body.firstChild
}

const renderItem = (item) => {
  const element = stringToHTML(`
                                  <div  class="result-item format-standard">
                                     <div class="result-item-image">
                                         <a href="publicacion-detalles.html" class="media-box"><img src="http://placehold.it/600x400&amp;text=IMAGE+PLACEHOLDER" alt=""></a>
                                          <span class="label label-primary bee-age">Nuevo</span>
                                          <span class="label label-success premium-listing">Listado Premium</span>
                                          <div class="result-item-view-buttons">
                                              <a href="https://www.youtube.com/watch?v=P5mvnA4BV7Y" data-rel="prettyPhoto"><i class="fa fa-play"></i> Ver Video</a>
                                              <a href="publicacion-detalles.html"><i class="fa fa-plus"></i> Ver Detalles</a>
                                          </div>
                                      </div>

                               <div class="result-item-in" data-id="${item._id}">
                                            <h4 class="result-item-title"><a href="publicacion-detalles.html">${item.name}</a></h4>
                                            <div class="result-item-cont">
                                                <div class="result-item-block col1">
                                                   <p>${item.desc}</p>
                                               </div>
                                               <div class="result-item-block col2">
                                                   <div class="result-item-pricing">
                                                       <div class="price">$1.950.000</div>
                                                    </div>
                                                   <div class="result-item-action-buttons">
                                                       <a href="#" class="btn btn-default btn-sm"><i class="fa fa-star-o"></i> Guardar</a>
                                                       <a href="publicacion-detalles.html" class="btn btn-default btn-sm">Preguntar</a><br>
                                                        <a href="#" class="distance-calc"><i class="fa fa-map-marker"></i> Distancia desde mi?</a>
                                                   </div>
                                               </div>
                                            </div>
                                            <div class="result-item-features">
                                               <ul id="ads-list" class="inline">
                                                   <li>2 Sitios</li>
                                                    <li>4000mt2</li>
                                                   <li>6 regaderas</li>
                                                    <li>Nuevo!</li>
                                                   <li>Publicado por Vendedor</li>
                                               </ul>
                                           </div>
                                       </div>

`)
/*
  element.addEventListener('click'), ()  => {
    const adsList= document.getElementById('ads-list')
    Array.from(adsList.children).forEach(x => x.classList.remove('selected'))
    element.classList.add('selected')

    const adsIdInput = document.getElementById('ads-id')
    adsIdInput = item._id
    console.log(item)
  }
  */
  return element
}
/*
 //podria utilizarse para los favoritos
const submit = document.getElementById('submit')
submit.setAttribute('disabled', true)
const adsId= document.getElementById('ads-id')
const adslIdValue = adslId.value
if (!adslIdValue) {
   aler('debe seleccionar una publicacion ')
  return
}
const myads = {
  meal_id: mealIdValue,
  user_id: 'chanchito feliz',
}
  fetch('http://localhost:3000/api/myads', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(myads)
  }).then(x => console.log(x))
  */
/*
const renderMyads = (myads, ads) => {
  const ads = ads.find( ads => ads._id === myads.ads_id)
  const element = stringToHTML(`<li data-id="${myads._id}">${ads.name} ${myads.user_id}</li>`)
  return element
}

*/

const inicializaDatos = () => {
  fetch('http://localhost:3000/api/ads')
    .then(response => response.json())
    .then(data => {
      adsState = data
      const adsList = document.getElementById('ads-list')
      const listItems= data.map(renderItem)
      adsList.removeChild(adsList.firstElementChild)
      listItems.forEach(element => adsList.appendChild(element))
    })
}
/*
      //mostrar mis publicaciones(usuarios y publicacion) desde el servidor y llenado automatico
      fetch('http://localhost:3000/api/myads')
        .then( response => response.json())
        .then( myadsData=> {
          const myadsList= document.getElementById('myads-list')
          const listMyads = myadsData.map(myadsData => renderMyads(myadsData, data)) //ojito con ads o ad el usa order y orders, ojitoooo
          myadsList.removeChild(myadsList.firstElementChild) //recordar crear img gif de cargando en mis publicaciones por que este metodo es para eliminarlo y cargarlo automaticamente
          listMyads.forEach(element => myadsList.appendChild(element))
        })
        */
/*
const inicializaFormulario = () => {
// crear publicaciones y mandarlas al servidor
  const myadsForm= document.getElementById('myads')
  myadsForm.onsubmit = (e) => {
    e.preventDefault()
    const submit = document.getElementById('submit')
    submit.setAttribute('disabled', true)
    const adsId = document.getElementById('ads-id')
    const adsIdValue = adsId.value
    if (!adsIdvalue) {
      alert('Debe llenar los campos')
      return
    }
// creando orden que seria crear publicacion
    const myads = {
      ads_id: adsIdValue,
      user_id: 'chanchito feliz'
    }

    fetch('http://localhost:3000/api/myads', {
      Access-Control-Allow-Methods: 'POST',
      mode: 'no-cors',
      Access-Control-Allow-Headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myads)
    }).then(x => x.json())
      .then(respuesta => {
        const renderedMyads = renderMyads(respuesta, adsState )
        const myadsList = document.getElementById('myads-list')
        myadsList.appendChild(renderedMyads)
        submit.removeAttribute('disabled')
      })
  }
}

const capturaLogin = () =>{
  const loginForm = document.getElementById('login-form')
  loginForm.onsubmit = (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
  }
}
*/
window.onload = () => {
  //inicializaFormulario()
  inicializaDatos()
 // capturaLogin()

}
