const mongoose = require('mongoose');


const { Schema } = mongoose;

const OrderSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  addressOne: String,
  addressTwo: String,
  country: String,
  state: String,
  zip: String,
  items: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Order', OrderSchema);
