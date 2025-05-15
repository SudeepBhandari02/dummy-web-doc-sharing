const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ["admin", "employee"],
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
