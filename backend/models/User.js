const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  dateCreated: { type: Date, required: true, default: Date.now },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: { type: Date, required: true, },
  location: { type: String, required: true },
  avatar: { type: String },
  interests: { type: String }
});


const User = model("User", UserSchema);
module.exports = User;
