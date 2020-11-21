const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Myads = mongoose.model('Myad', new Schema({
  ad_id: { type: Schema.Types.ObjectId, ref: 'Ad' },
  user_id: String,
}))

module.exports = Myads

