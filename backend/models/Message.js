const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  dateCreated: { type: Date, required: true, default: Date.now },
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Message = model('Message', MessageSchema);
module.exports = Message;
