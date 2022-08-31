const jwt = require("jsonwebtoken");
const userSchema = require("../models/userModel");


const createNewPass = async (req, res) => {
    try {
        
        let { resetToken } = req.params;
        console.log(resetToken)
        console.log(req.params)
        console.log(req.body)
        console.log(req.body.password)
        let newPassword  = req.body.password;
        console.log(newPassword)
        if (!newPassword) return res.status(403).json({ message: "No se recibió la nueva clave" });

        const encryptedPass = await userSchema.encryptPassword(newPassword);

        if (!resetToken) return res.status(403).json({ message: "No se recibió el Token, solicite otro link de verificación" });

        const decodedToken = jwt.verify(resetToken, process.env.JWT_SECRET);

        const user = await userSchema.findById(decodedToken.id);
        console.log(user);

        if(resetToken != user.resetToken) return res.status(401).json({message:"Este link ya fue utilizado"});

        if (!user) return res.status(404).json({ message: "No se encontró el usuario, por favor intente nuevamente" });

        user.resetToken = null;
        user.password = encryptedPass;

        await user.save();
        console.log(user.password);

        return res.status(200).json("password Saved");
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message:err });
    }


}

module.exports = createNewPass;