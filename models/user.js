const mongoose = require('mongoose')

//schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
},
    { timestamps: true },
)

const user = mongoose.model("user", userSchema)  // model


module.exports = user;