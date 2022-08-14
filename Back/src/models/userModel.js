import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
        },
        name: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            unique: false,
        },
        dateOfBirth: {
            type: Date,
        },
        urlProfile: {
            type: String,
        },
        resetToken: {
            type: String,
        },
        confirmToken: {
            type: String,
        },
        confirmedAccount: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true, versionKey: false }
);