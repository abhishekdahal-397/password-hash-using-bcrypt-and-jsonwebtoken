// middleware/authenticateJWT.js
const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key";
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = decoded; // corrected from user to decoded
    next();
  });
};
module.exports = authenticateJWT;
