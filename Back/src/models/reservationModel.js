const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        date: String,
        time: String,
        paymentMethod: String,
        sport: String,
        courtName: String,
        quantityOfPlayers: Number,
        totalPrice: Number,
    },
    { timestamps: true }
);

module.exports = new mongoose.model('reservas', reservationSchema);