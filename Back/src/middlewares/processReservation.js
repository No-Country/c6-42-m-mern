const reservationController = require("../controllers/reservation");
const userController = require("../controllers/user");
const mongoose = require("mongoose");

async function processReservation(req,res,next){
    try{
    let {username, email, date, time, paymentMethod, sport, courtName, quantityOfPlayers, totalPrice} = req.query;
    let reservation = await reservationController.create({username, email, date, time, paymentMethod, sport, courtName, quantityOfPlayers, totalPrice});
    const user = await userController.findOne(username);
    if(!user[0].reservations) user[0].reservations = [reservation._id];
    if(user[0].reservations && !user[0].reservations.includes("630c0b2513a3c88b97041d6f")) user[0].reservations.push(reservation._id);
    await user[0].save();
    await reservation.save();
    res.status(200).json({data:reservation})
    }
    catch(err){
        console.log(err);
    }

}

module.exports =  processReservation;