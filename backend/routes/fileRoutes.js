const express = require("express");
const multer = require("multer");
const {
    uploadFile,
    getFiles,
    deleteFile,
} = require("../controllers/fileController");
const { authenticateToken, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/upload", authenticateToken, isAdmin, upload.single("file"), uploadFile);
router.get("/", authenticateToken, getFiles);
router.delete("/:id", authenticateToken, isAdmin, deleteFile);

module.exports = router;
