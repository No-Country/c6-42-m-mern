const express = require("express");
const passport = require("../Utils/passport-strategies");
const { transporter, contactMailOptions } = require("../Utils/nodemailer");
const router = express.Router();
const forgetPassword = require("../middlewares/forgetPassword");
const processReservation = require("../middlewares/processReservation");
const createNewPass = require("../middlewares/createNewPass");
const confirmAccount = require("../middlewares/confirmAccount");
const userController = require("../controllers/user");
const userModel = require("../models/userModel");
const reservationController = require("../controllers/reservation");
const courtMsgSchema = require("../models/courtMsgModel");
const reservationModel = require("../models/reservationModel");
const reservation = require("../controllers/reservation");

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('error');
}

router.post('/new-password/:resetToken', createNewPass);

router.get('/activar-cuenta/:verToken', confirmAccount);

router.get('/error', async (req, res, next) => {
    res.send("error");
});

router.post('/create-reservation',async(req,res)=>{
    await reservationController.create(req.body);
})

router.get('/reservation',isAuth,async(req,res)=>{
    console.log(req);
})

router.put('/forgot-password', forgetPassword);

router.post('/login', passport.authenticate('login', { failureRedirect: 'error' }), async (req, res, next) => {
    try {
        const loginUser = await userController.findOne(req.body.username);
        res.send({
            username: loginUser[0].username,
            name: loginUser[0].firstName,
            lastName: loginUser[0].lastName,
            dni: loginUser[0].dni,
            email: loginUser[0].email,
            address: loginUser[0].address.street,
            reservations:loginUser[0].reservations||null
        });
    } catch (error) {
        res.json(error.message);
    }
});

router.post('/register', passport.authenticate('register', { failureRedirect: 'error' }), async (req, res, next) => {
    try {
        res.redirect(process.env.FRONT_URI);
    } catch (err) {
        console.log(err);
    }
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
        if (err) res.send(JSON.stringify(err));
        res.clearCookie('connect.sid');
        res.sendStatus(200);
        res.end();
    });
});

// router.get('/activar', async (req, res, next) => {
//     try {
//         // const info = await transporter.sendMail(mailOptions);
//         // console.log(info);
//         res.redirect('http://localhost:3000');
//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }

// });

router.post('/reservation', processReservation);

router.post('/contact', async (req, res, next) => {
    try {
        if (req.body) {
            const newCourtMsg = new courtMsgSchema(req.body);
            await transporter.sendMail(contactMailOptions(req.body));
            await newCourtMsg.save();
            res.status(200).send("Su info ha sido enviada");
        }
        else{
        res.status(403).send("La información no pudo ser procesada, por favor intente nuevamente");
        }
    } catch (err) {
        console.log(err);
    }
});



module.exports = router;