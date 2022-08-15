import { Router } from "express";

const router = Router();

router.post("/signin",signin);
router.post("/signup",signup);
router.put("/editprofile",editProfile);


export default router;