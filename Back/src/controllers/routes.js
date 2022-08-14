const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("hello world");
    next();
});

router.post('signup', (req, res, next) => {

});
router.post('signin', (req, res, next) => {

});

module.exports = router;