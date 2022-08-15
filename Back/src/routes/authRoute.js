import { Router } from "express";
import signUp from "../Utils/signupValidation";

const router = Router();

router.post("/signin",signIn);
router.post("/signup",signUp);
router.put("/editprofile",editProfile);


export default router;