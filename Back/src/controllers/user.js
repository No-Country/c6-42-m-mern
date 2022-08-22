const mongoose = require("mongoose");
const userSchema = require("../models/userModel");

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

  async create({ firstName, lastName, dateOfBirth, dni, city, street, email, role, phoneNumber, password, username }) {
    console.log('Llego create');
    const newUser = new userSchema({
      username,
      firstName,
      lastName,
      dateOfBirth,
      dni,
      email,
      adress: {
        street,
        city
      },
      phoneNumber,
      password: await userSchema.encryptPassword(password)
    });
    const res = await newUser.save();
    return res;
  };

  async findAll() {
    const model = mongoose.model(this.collection);
    const user = await model.find();
    if (user.length === 0) return false;
    return user; 
  };

  delete() {};

  update() {};
};

module.exports = new User('users');
