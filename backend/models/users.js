const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    faculty: {
      type: String,
      required: true,
      enum: ["BCA", "BIM", "BBA"]
    },
     semester: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    { 
        timestamps: true 
    });

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;