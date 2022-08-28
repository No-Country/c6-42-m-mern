const express = require("express");
const passport = require("../Utils/passport-strategies");
const { transporter, contactMailOptions } = require("../Utils/nodemailer");
const profesorSchema = require("../models/profesorModel");
const confirmAccount = require("../middlewares/confirmAccount");
const router = express.Router();
const forgetPassword = require("../middlewares/forgetPassword");
const createNewPass = require("../middlewares/createNewPass");

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('error');
}

router.put('/new-password/:resetToken',createNewPass);

router.get('/activar-cuenta/:verToken',confirmAccount);

router.get('/profile',async (req, res, next) => {
    console.log(Object.values(req.sessionStore.sessions)[0].split('"').at(-2));
    res.send({data:Object.values(req.sessionStore.sessions)[0].split('"').at(-2)})}
);

router.get('/error', async (req, res, next) => {
    console.log(Object.values(req.sessionStore.sessions)[0].split('"').at(-2))
    res.send(Object.values(req.sessionStore.sessions)[0].split('"').at(-2));
});

router.put('/forgot-password',forgetPassword);

router.get('/jugadores/:id', isAuth, (req, res, next) => {
    console.log(req.params);
    res.send('succeeeessss!');
});

router.post('/login', passport.authenticate('login', { failureRedirect: 'error', successRedirect: 'profile' , failureMessage:true}));

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
    if (req.body.data){
    await transporter.sendMail(contactMailOptions(req.body.data));
    res.status(200).send("Su info ha sido enviada");}
    res.status(403).send("La información no pudo ser procesada, por favor intente nuevamente");
    }catch(err){
        console.log(err);
    }
})


module.exports = router;
