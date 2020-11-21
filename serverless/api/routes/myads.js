const express = require('express')
const Myads = require('../models/Myads')

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

router.post('/', (req, res) => {
  Myads.create(req.body)
    .then( x => res.status(201).send(x) )
})

router.put('/:id', (req, res) => {
  Myads.findOneAndUpdate(req.params.id, req.body)
    .then( () => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
  Myads.findOneAndDelete(req.params.id).exec().then( () => res.sendStatus(204))
})

module.exports = router
