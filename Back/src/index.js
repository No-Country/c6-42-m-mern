require("dotenv").config();
require("./db");
const express = require("express");
const expressSession = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const router = require("./routes/routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,    // 10 minutes
    max: 100                     // 100 requests per IP
});
app.use(limiter);
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(hpp());
app.use(xss());
app.use(helmet());
app.use(expressSession({
    secret: "c6-42-m-mern",
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 600000
    },
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.listen(PORT, (err) => {
    if (!err) {
        console.log("server on Port", PORT);
    } else {
        console.log(err);
    }
})
