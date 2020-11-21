const stringToHTML = (s) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(s, 'text/html')

  return doc.body.firstChild
}

const renderItem = (item) => {
const  element = stringToHTML(
                             `
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
                                  </div>

`)
  console.log(element)

  element.addEventListener('click', () => {
    element.classList.add('selected') //agregar clase al hacer click
  })


  return element
}

window.onload = () => {
  fetch('http://localhost:3000/api/ads')
    .then(response => response.json())
    .then(data => {
      const adsList = document.getElementById('ads-list')
      const listItems = data.map(renderItem)
      listItems.forEach(element => adsList.appendChild(element))
    })
}
