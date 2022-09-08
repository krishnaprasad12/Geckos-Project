const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,

    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    agentid: {
        type: String,
        required: true
    }
});

const User = mongoose.model("USER",userSchema);

module.exports = User;