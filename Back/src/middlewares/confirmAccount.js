const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const confirmAccount = async (req, res) => {
  try {
    const { verToken } = req.params;
    if (!verToken) return res.status(403).json({ message: "No se recibió el Token" });

    const decoded = jwt.verify(verToken, process.env.JWT_SECRET);
    const userExist = await userModel.findById(decoded.id);
    if (!userExist) return res.status(404).json({ message: "El usuario no existe" });

    if (!(userExist.verToken === verToken))
      return res.status(400).json({
        message: "Wrong token",
      });

    userExist.verToken = null;

    if (userExist.confirmedAccount === true) return res.status(400).json({ message: "Cuenta previamente confirmada" });

    userExist.confirmedAccount = true;

    const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });


    userExist.verToken = token;

    await userExist.save();

    return res.status(200).json({ message: `Cuenta confirmada` });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Algo salió mal" });
  }
};

module.exports = confirmAccount;
