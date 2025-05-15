const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { model } = require("mongoose");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });

    await user.save();
    res.json({ message: "User created" });
});


router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log("inside login route");
    
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Set to true in production (requires HTTPS)
        sameSite: "lax",
        maxAge: 3600000, // 1 hour
    });

    res.json({ role: user.role });
});

// Logout
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
});

module.exports = router;