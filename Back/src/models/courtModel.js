import { Schema } from "mongoose";

const courtSchema = new Schema({
    name: String,
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
        lon: Number
    },
    phoneNumber: String,
    courtQuantity: Number,
    sport: String,
    extras: {
        restaurant: Boolean,
        dressers: Boolean,
    },
    workingHours: {
        openTime: Number,
        closeTime: Number
    }
})

export default courtSchema;