const express = require('express')
const Ads = require('../models/Ads')

const router = express.Router()


router.get('/', (req, res) => {
  Ads.find()
    .exec()
    .then( x => res.status(200).send(x) )
})

router.get('/:id', (req, res) => {
  Ads.findById(req.params.id)
    .exec()
    .then( x => res.status(200).send(x) )
})

router.post('/', (req, res) => {
  Ads.create(req.body)
    .then( x => res.status(201).send(x) )
})

router.put('/:id', (req, res) => {
  Ads.findOneAndUpdate(req.params.id, req.body)
    .then( () => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
  Ads.findOneAndDelete(req.params.id).exec().then( () => res.sendStatus(204))
})

module.exports = router
