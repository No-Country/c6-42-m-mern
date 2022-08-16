const mongoose = require("mongoose");

const courtSchema = new mongoose.Schema({
    name: String,
    address: {
        street: {
            type: String,
            lowercase: true
        },
        city: {
            type: String,
            lowercase: true
        },
        lat: Number,
        lon: Number
    },
    phoneNumber: String,
    courtQuantity: Number,
    sport: String,
    extras: {
        restaurant: Boolean,
        dressers: Boolean,
    },
    workingHours: {
        openTime: Number,
        closeTime: Number
    }
})

module.exports = new mongoose.model('Stadiums', courtSchema);