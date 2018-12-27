const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String},
  createsAt: {type: String, default: Date.now()}
})
module.exports = mongoose.model('User', User);