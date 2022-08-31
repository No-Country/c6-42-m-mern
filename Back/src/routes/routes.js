const express = require("express");
const passport = require("passport");
const { transporter, mailOptions, contactMailOptions } = require("../Utils/nodemailer");
const router = express.Router();
// const forgetPassword = require("../middlewares/forgetPassword");
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
    res.send('algo salio mal :(');
});

// router.put('/forgot-password',forgetPassword);

router.get('/error', async (req, res, next) => {
    console.log('ruta error');
    res.json({ data: [], error: 'algo salio mal :(' });
});

// router.get('/user/:username', isAuth, async (req, res, next) => {
//     try {
//         res.send(await userController.findOne(req.params.username));
//     } catch (error) {
//         console.log(error);
//         res.send({msg: 'error fetch user'});
//     }
// });

// router.get('/profile', (req, res, next) => {
//     res.redirect(`http://localhost:3000/login/${req.user.username}`);
// });

// router.post('/login', passport.authenticate('login', { failureRedirect: 'error', successRedirect: 'profile' }));

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
            token: getToken(loginUser[0])
        });
    } catch (error) {
        res.json(error.message);
    }
});

// router.post('/login', passport.authenticate('login', { failureRedirect: 'error' }), async (req, res, next) => {
//     try {
//         res.redirect(`http://localhost:3000/login/${req.body.username}`);
//     } catch (error) {
//         res.json(error.message);
//     }
// });



router.post('/register', passport.authenticate('register', { failureRedirect: 'error' }), async (req, res, next) => {
    try {
        await transporter.sendMail(mailOptions(req.body));
        res.redirect(process.env.FRONT_URI);
    } catch (err) {
        console.log(err);
        res.send(err);
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
})

module.exports = router;
