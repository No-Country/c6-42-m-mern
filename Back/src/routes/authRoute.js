const { Router } = require("express");
const signUp = require("../Utils/signupValidation");

const router = Router();

router.post("/signin",signIn);
router.post("/signup",signUp);
router.put("/editprofile",editProfile);


module.exports = router;
