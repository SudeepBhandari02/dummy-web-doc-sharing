const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: String,
    originalname: String,
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("File", fileSchema);
