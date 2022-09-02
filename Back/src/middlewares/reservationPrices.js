const mongoose = require("mongoose");
const userController = require("../controllers/user");
const reservationController = require("../controllers/reservation");

async function getReservation(req, res) {
    try {
        let { username } = req.query;

        const reservationsInfo = [];

        const user = await userController.findOne(username);

        const userRes = user[0].reservations;

        // Get each reservation on the user document.
        for (const reservation of userRes) {

            const individualRes = await reservationController.findById(reservation);

            reservationsInfo.push(individualRes);
        }

        // Send the reservations to the FrontEnd
        res.send({ reservationsInfo });

    } catch (err) {

        console.log(err);
    }
}

module.exports = getReservation;