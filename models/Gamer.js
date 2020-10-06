const mongoose = require('mongoose');

const gamerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    gamerName: {
        type: String,
        required: [true, "yo gamer, decide a gamer name now?"],
        unique: true
    },
    email: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: [true, "Please type a valid email"]
    },
    password: {
        type: String,
        required: true,
        min: [6, "password must be 8 charecters long"]
    },
    createdAt: {
        type: Date
        default: Date.now()
    }
})

module.exports = mongoose.model('Gamer', gamerSchema)