const express = require('express')
const Myads = require('../models/Myads')
const { isAuthenticated, hasRoles }  = require('../auth')

const router = express.Router()


router.get('/', (req, res) => {
  Myads.find()
    .exec()
    .then( x => res.status(200).send(x) )
})

router.get('/:id', (req, res) => {
  Myads.findById(req.params.id)
    .exec()
    .then( x => res.status(200).send(x) )
})

router.post('/', isAuthenticated, (req, res) => {
  const { _id } = req.user
  Myads.create({ ...req.body, user_id: _id }).then(x => res.status(201).send(x))
})

//hasrole para el tipo de funcion nos permite verificar de que un usuario tenga cierto rol para acceder a una api
router.put('/:id', isAuthenticated, hasRoles(['admin','user']), (req, res) => {
  Myads.findOneAndUpdate(req.params.id, req.body)
    .then( () => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req, res) => {
  Myads.findOneAndDelete(req.params.id).exec().then( () => res.sendStatus(204))
})

module.exports = router
