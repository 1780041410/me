const mongoose = require('mongoose')

let Schema = mongoose.Schema

let UserSchema = new Schema({
  name: String,
  passwd: String
})

let User = mongoose.model('User', UserSchema)


