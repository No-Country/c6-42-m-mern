const express = require("express");
const passport = require("passport");
const { transporter, contactMailOptions } = require("../Utils/nodemailer");
const profesorSchema = require("../models/profesorModel");
const confirmAccount = require("../middlewares/confirmAccount");
const router = express.Router();
const userController = require("../controllers/user");
const forgetPassword = require("../middlewares/forgetPassword");
const createNewPass = require("../middlewares/createNewPass");
const processReservation = require("../middlewares/processReservation");
const reservationModel = require("../models/reservationModel");

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('error');
}

router.put('/new-password/:resetToken', createNewPass);

router.get('/activar-cuenta/:verToken', confirmAccount);

router.get('/profile', async (req, res, next) => {
    console.log(Object.values(req.sessionStore.sessions)[0].split('"').at(-2));
    res.send({ data: Object.values(req.sessionStore.sessions)[0].split('"').at(-2) })
}
);

router.get('/error', async (req, res, next) => {
    // console.log(Object.values(req.sessionStore.sessions)[0].split('"').at(-2))
    // res.send(Object.values(req.sessionStore.sessions)[0].split('"').at(-2));
    res.send('Errorrr');
});

router.put('/forgot-password', forgetPassword);

router.get('/jugadores/:id', isAuth, (req, res, next) => {
    console.log(req.params);
    res.send('succeeeessss!');
});

router.post('/login', passport.authenticate('login', { failureRedirect: 'error' }), async (req, res, next) => {
    try {
        const loginUser = await userController.findOne(req.body.username);
        res.send({
            username: loginUser[0].username,
            name: loginUser[0].firstName,
            lastname: loginUser[0].lastName,
            dni: loginUser[0].dni,
            email: loginUser[0].email,
            address: loginUser[0].address.street,
            reservations: loginUser[0].reservations||null
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

router.post('/reservation', isAuth, processReservation);
router.post('/reservations', isAuth, async (req, res, next) => {
    try {
        const reserv = await reservationModel.find({ username: req.body.username })
        res.send(reserv);
    } catch (error) {
        console.log(error);
    }
});

router.post('/contact', async (req, res, next) => {
    try {
        if (req.body) {
            await transporter.sendMail(contactMailOptions(req.body));
            res.status(200).send("Su info ha sido enviada");
        }
        res.status(403).send("La información no pudo ser procesada, por favor intente nuevamente");
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;