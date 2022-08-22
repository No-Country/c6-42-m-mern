const jwt = require("jsonwebtoken");
const userSchema = require("../models/userModel");

const createNewPass = async (req, res) => {
  try {
    console.log('req', req.params)
    let { resetToken } = req.params;
    let { newPassword } = req.body;

    if (!newPassword) return res.status(403).json({ message: "No se recibió la nueva clave" });

    const encryptedPass = await userSchema.encryptPassword(newPassword);

    if (!resetToken) return res.status(403).json({ message: "No se recibió el Token, solicite otro link de verificación" });

    const decodedToken = jwt.verify(resetToken, process.env.JWT_SECRET);

    const user = userSchema.findById(decodedToken.id);

    if (!user) return res.status(404).json({ mesasge: "No se encontró el usuario, por favor intente nuevamente" });

    user.resetToken = null;

    user.password = encryptedPass;

    await user.save();

  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "algo salió mal" });
  }


}

module.exports = createNewPass;
