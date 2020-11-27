const jwt = require('jsonwebtoken')
const Users = require('../models/Users')

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization
    if(!token) {
        return res.sendStatus('403')
    }
    jwt.verify(token, 'mi-secreto', (err, decoded) => {
        const { _id } = decoded
        Users.findOne({ _id }).exec()
            .then(user => {
                req.user = user
                next()
            })
    })
}

const hasRoles = roles => (req, res, next) => {
  if (roles.indexOf(req.user.role) > -1 ) {
    return next()
  }
  res.sendStatus(403)
}

      //mostrar mis publicaciones(usuarios y publicacion) desde el servidor y llenado automatico
      fetch('http://localhost:3000/api/myads')
        .then( response => response.json())
        .then( myadsData=> {
          const myadsList= document.getElementById('myads-list')
          const listMyads = myadsData.map(myadsData => renderMyads(myadsData, data)) //ojito con ads o ad el usa order y orders, ojitoooo

          myadsList.removeChild(myadsList.firstElementChild) //recordar crear img gif de cargando en mis publicaciones por que este metodo es para eliminarlo y cargarlo automaticamente
          listMyads.forEach(element => myadsList.appendChild(element))
        })
module.exports = {
  isAuthenticated,
  hasRoles,
}
