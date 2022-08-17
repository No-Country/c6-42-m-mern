const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        firstName: {
            type: String,
            lowercase: true
        },
        lastName: {
            type: String,
            lowercase: true
        },
        phoneNumber: String,
        dni: Number,
        address: {
            street: {
                type: String,
                lowercase: true
            },
            city: {
                type: String,
                lowercase: true
            },
            lat: Number,
            lon: Number,
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        tutor: {
            fullName: {
                type: String,
                default: null
            },
            phoneNumber: {
                type: Number,
                default: null
            },
        },
        dateOfBirth: {
            type: Date,
            required: true,
        }
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

module.exports = new mongoose.model('users', userSchema);
