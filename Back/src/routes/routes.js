const express = require("express");
const passport = require("../Utils/passport-strategies");
const { transporter, mailOptions } = require("../Utils/nodemailer");
const profesorSchema = require("../models/profesorModel");
const router = express.Router();

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('here 1')
        return next();
    }
    console.log('here 2')
    res.redirect('error');
}

router.get('/activar-cuenta', (req, res, next) => {
    res.send('Cuenta Activada!');
});

router.get('/error', async (req, res, next) => {
    // try {
    //     const info = await transporter.sendMail(mailOptions);
    //     console.log(info);
    //     res.send('Active su cuenta con el mail enviado pls!');
    // } catch (err) {
    //     console.log(err);
        // res.send(err);
    // }
    res.send('algo salio mal :(');
});

router.get('/jugadores', isAuth, (req, res, next) => {
    console.log(req.session);
    console.log('logeado?', req.isAuthenticated());
    console.log('usuario logeado', req.user);
    console.log("hello worldddddddddddddddd");
    res.send('succeeeessss!');
});

router.post('/login', passport.authenticate('login', { failureRedirect: 'error', successRedirect: 'jugadores' }));

router.post('/register', passport.authenticate('register', { failureRedirect: 'error', successRedirect: 'activar' }));

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
        if (err) res.send(JSON.stringify(err));
        res.send(`Desloego para ${req.user}`);
    });
});

router.get('/activar', async (req, res, next) => {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
        res.send('Active su cuenta con el mail enviado pls!');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    
});


module.exports = router;
