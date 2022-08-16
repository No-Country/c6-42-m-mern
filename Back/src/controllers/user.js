const mongoose = require("mongoose");
const userSchema = require("../models/userModel");

class User {
  constructor(collection) {
    this.collection = collection;
  }

  async exist(usr) {
    const model = mongoose.model(this.collection);
    const user = await model.find({ username: usr });
    if (user.length === 0) return false;
    return user; 
  };

  async create({ first_name, last_name, date_of_birth, dni, adress, email, role, rating, phone, password, username }) {
    const newUser = new userSchema({
      username,
      first_name,
      last_name,
      date_of_birth,
      dni,
      email,
      adress,
      role,
      rating,
      phone,
      password: await userSchema.encryptPassword(password)
    });
    await newUser.save();
  };

  find() {};

  findAll() {};

  delete() {};

  update() {};
};

module.exports = new User('users');
