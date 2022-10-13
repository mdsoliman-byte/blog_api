const mongoose = require("mongoose");
const signUpSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    profile: {
        type: String,
        trim: true,
        default: "avatar.png"
    },
}, { versionKye: false })



const signUpModel = mongoose.model("Users", signUpSchema);
module.exports = signUpModel;