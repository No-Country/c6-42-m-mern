const express = require("express");
const passport = require("../Utils/passport-strategies");
const { transporter, mailOptions, contactMailOptions } = require("../Utils/nodemailer");
const profesorSchema = require("../models/profesorModel");
const confirmAccount = require("../middlewares/confirmAccount");
const jwt = require("jsonwebtoken");
const router = express.Router();

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('error');
}

router.get('/activar-cuenta/:verToken', confirmAccount);

router.get('/error', async (req, res, next) => {
    res.send('algo salio mal :(');
});

router.get('/jugadores/:id', isAuth, (req, res, next) => {
    console.log(req.params);
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
        // const info = await transporter.sendMail(mailOptions);
        // console.log(info);
        res.redirect('http://localhost:3000');
    } catch (err) {
        console.log(err);
        res.send(err);
    }

});

router.post('/contact', async (req, res, next) => {
    try{
    await transporter.sendMail(contactMailOptions(req.body));
    res.statusCode(200).send("Su info ha sido enviada");
    }catch(err){
        console.log(err);
    }
})


module.exports = router;
