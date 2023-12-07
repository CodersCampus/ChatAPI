// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const ws = require("ws");
const bcrypt = require("bcryptjs");
const UserModel = require("./models/User");
const cryptedSecret = bcrypt.genSaltSync(15);

//
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
const jwtSecret = process.env.JWT_SECRET;
const clientUrl = process.env.FRONT_END_URL;
// Start express server
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: clientUrl,
    credentials: true,
    methods: ["GET", "POST"],
  })
);

// Connect to MongoDB
mongoose.connect(mongoUrl);

app.use("/test", (req, res) => {
  res.send("Hello World, hi!");
});

// ACCOUNT
app.get("/account", (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("no token found!");
  }
});

// REGISTER
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await UserModel.findOne({ username });

    if (foundUser) {
      console.log("This user already exists");
      res.json({ isUserExist: true });
      return;
    } else {
      const createdUser = await UserModel.create({
        username,
        password: bcrypt.hashSync(password, cryptedSecret), // hash passwords before creating users
      });

      jwt.sign(
        { userId: createdUser._id, username },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          res
            .cookie("token", token, { sameSite: "none", secure: true })
            .status(201)
            .json({
              _id: createdUser._id,
            });
        }
      );
    }
  } catch (error) {
    if (error) throw error;
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Let's check if the user already exists
  const foundUser = await UserModel.findOne({ username });
  if (foundUser) {
    // Check if the password coming from req is equal to bcrypted password
    const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password);
    if (isPasswordCorrect) {
      jwt.sign({ userId: foundUser._id, username }, jwtSecret, (err, token) => {
        // We use sameSite `none` here because we have different endpoints for be and fe
        res.cookie("token", token, { sameSite: "none", secure: true }).json({
          id: foundUser._id,
        });
      });
    }
  }
});

const PORT = process?.env.PORT || 3001;

// Listen to PORT
app.listen(PORT);
