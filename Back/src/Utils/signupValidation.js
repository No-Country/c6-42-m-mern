const userModel = require("../models/UserModel");

const signUp = async (req, res) => {
    try {
        const { username, Firstname, lastName, phoneNumber, dni, address, email, password, dateOfBirth, tutor = null } = req.body;

        const userExists = await userModel.findOne({ email });

        if (userExists)
            return res.status(409).json({ message: "User aready exists" });

        const newUser = new userModel({
            username,
            Firstname,
            lastName,
            phoneNumber,
            dni,
            dateOfBirth,
            address,
            tutor,
            email,
            password: await userModel.encryptPassword(password),

        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Somethin went wrong, try again" });
    }
};

module.exports = signUp;