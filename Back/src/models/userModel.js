const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        first_name: {
            type: String,
            lowercase: true
        },
        last_name: {
            type: String,
            lowercase: true
        },
        phone_number: String,
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
            full_name: String,
            phone_number: String,
            address: {
                street: {
                    type: String,
                    lowercase: true
                },
                city: {
                    type: String,
                    lowercase: true
                }
            },
        },
        date_of_birth: {
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
