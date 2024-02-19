// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const authenticateJWT = require("./middlewares/authenticateJWT");

const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://abhishekdahal397:Ri3lcgFuXGKrfuzG@jwt.hc9163v.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());

app.use("/api", authRoutes);

app.get("/api/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
