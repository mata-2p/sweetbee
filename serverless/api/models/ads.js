const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ads = mongoose.model('Ad', new Schema({
  name: String,
  desc: String,
}))

module.exports = Ads

