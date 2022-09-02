require("dotenv").config({ path: "../../.env" })
const mongoose = require("mongoose");
const userSchema = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { transporter, mailOptions } = require("../Utils/nodemailer");
class User {
  constructor(collection) {
    this.collection = collection;
  }

  async findOne(usr) {
    const model = mongoose.model(this.collection);
    const user = await model.find({ username: usr });
    if (user.length === 0) return false;
    return user;
  };

  async create({ firstName, lastName, dateOfBirth, gender, dni, city, street, email, phoneNumber, password, username }) {
    try {
      const newUser = new userSchema({
        username,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        dni,
        email,
        address: {
          street,
          city
        },
        phoneNumber,
        password: await userSchema.encryptPassword(password)
      });
      const userToken = jwt.sign({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }, process.env.JWT_SECRET,
        {
          expiresIn: "1h"
        })
      newUser.verToken = userToken;
      const confirmationLink = `http://localhost:${process.env.PORT}/activar-cuenta/${userToken}`;
      await transporter.sendMail(mailOptions(confirmationLink, newUser.email, "activation"));
      const res = await newUser.save();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  async findAll() {
    const model = mongoose.model(this.collection);
    const user = await model.find();
    if (user.length === 0) return false;
    return user;
  };

  delete() { };

  update() { };
};

module.exports = new User('users');