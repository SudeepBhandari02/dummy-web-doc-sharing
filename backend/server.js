const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");



const fileRoutes = require("./routes/fileRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",  // your frontend Vite dev server
    credentials: true,                // allow cookies to be sent
}));


if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}


app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server running on port", process.env.PORT);
        });
    })
    .catch(err => console.log(err));
