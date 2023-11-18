// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ws = require("ws");
const bcrypt = require("bcryptjs");
const env = require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const cryptedSecret = bcrypt.genSaltSync(15);

// Start express server
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use("/test", (req, res) => {
  res.send("Hello World, hi!");
});

const PORT = process?.env.PORT || 3001;

// Listen to PORT
app.listen(PORT);
