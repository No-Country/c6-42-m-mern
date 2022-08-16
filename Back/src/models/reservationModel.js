const mongoose = require("mongoose");

const reservationSchema = new Schema(
    {
        username: String,
        email: {
            type: String,
            unique: true,
        },
        dateAndTime: {
            type: String,
            date: Date,
            time: String
        },
        paymentMethod: String,
        sport: String,
        courtName: String,
        quantityOfPlayers: Number,
        totalPrice: Number,
    },
    { timestamps: true }
);

module.exports = new mongoose.model('reservas', reservationSchema);

