import { Schema } from "mongoose";

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
    },
    { timestamps: true }
);