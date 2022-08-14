import { Schema } from "mongoose";
import { stringify } from "querystring";

const reservationSchema = new Schema(
    {
        username:String,
        email: {
            type: String,
            unique: true,
        },
        dateAndTime: {
            type:String,
            date: Date,
            time: String
        },
        quantityOfPlayers:Number,
        totalPrice:Number,
    },
    { timestamps: true }
);