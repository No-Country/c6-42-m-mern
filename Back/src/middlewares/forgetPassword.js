const jwt = require("jsonwebtoken");
const userSchema = require("../models/userModel");
const { transporter, passwordMailOptions } = require("../Utils/nodemailer");

const forgetPassword = async (req, res) => {
    try {
        let { email } = req.params;

        if (!email) return res.status(404).json({ message: "Se necesita una dirección de correo electrónico" })

        const user = await userSchema.findOne({ email });

        if (!user) return res.status(403)

        const token = jwt.sign({
            id: user._id,
            username: user.username,
            password: user.password
        },
            process.env.JWT_SECRET,
            { expiresIn: "15m" })


        user.resetToken = token;

        const confirmationLink = `http://localhost:5000/new-password/${token}`

        await user.save();

        await transporter.sendMail(passwordMailOptions(confirmationLink, user.email,"renewpass"));

        return res.status(200).json({ message: "Email sent" })

    } catch (err) {
        console.log(err);
    }
}

module.exports = forgetPassword;