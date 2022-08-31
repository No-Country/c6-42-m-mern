const mongoose = require("mongoose");
const reservationSchema = require("../models/reservationModel");
const jwt = require("jsonwebtoken");
const { transporter, reservationMailOptions } = require("../Utils/nodemailer");
const stripe = require("stripe")("sk_test_51LcIHQE1aPuiC7C6lKHAWWBh6jmektKy8qPn2AIEKCrxIDsep9mqvGqSKrceSGN3V3CSBILALJMLcze2tEbBcKuY002MPpZHgh");
class Reservation {
    constructor(collection) {
        this.collection = collection;
    }

    async exist(usr) {
        const model = mongoose.model(this.collection);
        const user = await model.find({ username: usr });
        if (user.length === 0) return false;
        return user;
    };

    async create({ username, email, date, time, paymentMethod, sport, courtName, quantityOfPlayers, totalPrice }) {
        const newRes = new reservationSchema({
            username,
            email,
            date,
            time,
            paymentMethod,
            sport,
            courtName,
            quantityOfPlayers,
            totalPrice
        })
        const session = stripe.checkout.sessions.create({
            payment_method_types :["card"],

        })
        await transporter.sendMail(reservationMailOptions(newRes));
        const res = await newRes.save();
        return res;
    };

    async findByUsername(userN) {
        const model = mongoose.model(this.collection);
        const reservations = await model.find({ username: userN });
        if (reservations.length === 0) return false;
        return reservations;
    };

    async findByDate(ReceivedDate) {
        const model = mongoose.model(this.collection);
        const reservations = await model.find({date:ReceivedDate});
        if (reservations.length === 0) return false;
        return reservations;
    };

    async delete(id) {
        const model = mongoose.model(this.collection);
        const deletedReservation = await model.findOneAndDelete({_id:id})
        return deletedReservation;
     };

    update() { };
};

module.exports = new Reservation('reservations');
