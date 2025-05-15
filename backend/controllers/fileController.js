const File = require("../models/File");
const fs = require("fs");

exports.uploadFile = async (req, res) => {
    try {
        const file = new File({
            filename: req.file.filename,
            originalname: req.file.originalname
        });
        await file.save();
        res.status(201).json(file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFiles = async (req, res) => {
    console.log("Fetching files");
    
    try {
        const files = await File.find().sort({ uploadDate: -1 });
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ error: "File not found" });

        fs.unlinkSync(`uploads/${file.filename}`);
        await file.deleteOne();
        res.json({ message: "File deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
