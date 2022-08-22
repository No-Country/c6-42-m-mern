const express = require("express");
const passport = require("passport");
const { transporter, mailOptions, contactMailOptions } = require("../Utils/nodemailer");
const router = express.Router();
// const forgetPassword = require("../middlewares/forgetPassword");
const createNewPass = require("../middlewares/createNewPassword");
const confirmAccount = require("../middlewares/confirmAccount");

let isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('error');
}

router.put('/new-password/:resetToken',createNewPass);

router.get('/activar-cuenta/:verToken', confirmAccount);

router.get('/error', async (req, res, next) => {
    res.send('algo salio mal :(');
});

// router.put('/forgot-password',forgetPassword);

router.get('/error', async (req, res, next) => {
    console.log('ruta error');
    res.json({ data: [], error: 'algo salio mal :(' });
});

router.get('/profile', (req, res, next) => {
    console.log('user: ', req.user);
    console.log('session: ', req.session);
    // console.log('body: ', req.body);
    console.log('Logeado!');
    res.json({ data: [], message: 'Logeadoo!' });
});

router.post('/login', (req, res, next) => passport.authenticate('login', { failureRedirect: 'error', successRedirect: 'profile' })(req, res, next));
// router.post('/login', (req, res, next) => {
//     console.log(req.body);
//     res.send('200');
// })


router.post('/register', passport.authenticate('register', { failureRedirect: 'error' }), async (req, res, next) => {
    try {
        await transporter.sendMail(mailOptions(req.body));
        res.redirect(process.env.FRONT_URI);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
        if (err) res.send(JSON.stringify(err));
        res.redirect('http://localhost:3000/');
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
})

module.exports = router;
