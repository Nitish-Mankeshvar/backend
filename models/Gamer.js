const mongoose = require("mongoose");

const gamerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "Please type a valid email"],
  },
  password: {
    type: String,
    required: true,
    min: [6, "password must be 8 charecters long"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please type 10 digit phone number"],
  },
  age: {
    type: String,
    required: [true, "Please type your age"],
  },
  address: {
    type: String,
    required: [true, "Please type your address"],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Gamer", gamerSchema);
