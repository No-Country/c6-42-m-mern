const express = require("express");
const passport = require("../Utils/passport-strategies");
const { transporter, contactMailOptions } = require("../Utils/nodemailer");
const profesorSchema = require("../models/profesorModel");
const confirmAccount = require("../middlewares/confirmAccount");
const router = express.Router();
const forgetPassword = require("../middlewares/forgetPassword");
const createNewPass = require("../middlewares/createNewPass");
const processReservation = require("../middlewares/processReservation");
const createNewPass = require("../middlewares/createNewPassword");
const confirmAccount = require("../middlewares/confirmAccount");
const userController = require("../controllers/user");
const userModel = require("../models/userModel");
const { getToken } = require("../Utils/token");

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('error');
}

router.put('/new-password/:resetToken',createNewPass);

router.get('/activar-cuenta/:verToken', confirmAccount);

router.get('/error', async (req, res, next) => {
    console.log(Object.values(req.sessionStore.sessions)[0].split('"').at(-2))
    res.send(Object.values(req.sessionStore.sessions)[0].split('"').at(-2));
});

router.put('/forgot-password', forgetPassword);

router.post('/register', passport.authenticate('register', { failureRedirect: 'error' }), async (req, res, next) => {
    try {
        await transporter.sendMail(mailOptions(req.body));
        res.redirect(process.env.FRONT_URI);
    } catch (err) {
        console.log(err);
    }
});

router.get('/logout', isAuth, (req, res, next) => {
    req.session.destroy(err => {
        if (err) res.send(JSON.stringify(err));
        console.log('Logout successful');
        res.clearCookie('connect.sid');
        res.sendStatus(200);
        res.end();
    });
});

router.post('/contact', async (req, res, next) => {
    try {
        await transporter.sendMail(contactMailOptions(req.body));
        res.status(200).json({
            response: "Su info ha sido enviada",
            error: ''
        })
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;
