import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String,
            lowercase: true
        },
        lastName: {
            type: String,
            lowercase: true
        },
        phoneNumber: String,
        DNI: Number,
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
            unique: false,
            required: true
        },
        tutor: {
            fullName: String,
            PhoneNumber: String,
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
        dateOfBirth: {
            type: Date,
            required: true,
        },
        rating: Number
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

export default userSchema;