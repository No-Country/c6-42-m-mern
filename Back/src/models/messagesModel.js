const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now()
    },
    message: {
      type: String,
      required: true
    },
    club: {
      type: String,
      required: true
    }
  }
);

exports.modules = new mongoose.Model( 'messages' ,messageSchema);
