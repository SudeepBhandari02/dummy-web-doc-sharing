const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const token = req.cookies?.token;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function isAdmin(req, res, next) {
    if (req.user.role !== "admin") return res.sendStatus(403);
    next();
}

module.exports = { authenticateToken, isAdmin };
