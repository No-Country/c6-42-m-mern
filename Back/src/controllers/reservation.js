const mongoose = require("mongoose");
const reservationSchema = require("../models/reservationModel");
const jwt = require("jsonwebtoken");
const { transporter, reservationMailOptions } = require("../Utils/nodemailer");
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
        await transporter.sendMail(reservationMailOptions(newRes));
        const res = await newRes.save();
        return res;
    };

    async findByUsername(userN) {
        const model = mongoose.model(this.collection);
        const reservations = await model.find({ username: userN });
        if (userN.length === 0) return false;
        return reservations;
     };

    findAll() { };

    delete() { };

    update() { };
};

module.exports = new Reservation('reservations');
