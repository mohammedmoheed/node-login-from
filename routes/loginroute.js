import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import path from "path";

const cwd = path.resolve();
const fpath = cwd + "/data/config.env";
//config path for environmet variable
dotenv.config({
  path: fpath,
});

console.log(fpath);

const isAuthenticate = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decode._id);
    next();
  } else {
    res.redirect("/login");
  }
};

const router = express.Router();
router.use(cookieParser());

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/user", isAuthenticate, (req, res) => {
  console.log(req.user);
  res.render("user", {
    title: "user page",
    name: req.user.name,
  });
});

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "backend",
  })
  .then(() => console.log("connected"))
  .catch(() => console.log("failed"));

//create schema
const messageSchema = mongoose.Schema({
  name: String,
  email: String,
});

const userschema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//creating a model
const Message = mongoose.model("message", messageSchema);
const User = mongoose.model("user", userschema);

router.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;
  // check user is resisterd
  let user = await User.findOne({ email });
  //if already exist reirect to login
  if (user) return res.redirect("/login");

  //if not then create one
  //create hash of password
  const hashPassword = await bcrypt.hash(password, 10);
  //create user
  user = await User.create({ name, email, password: hashPassword });
  res.redirect("/login");
});

router.post("/logout", (req, res) => {
  res.cookie("token", null, {
    httponly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //check user is availabel or not
  let user = await User.findOne({ email });
  if (!user) return res.redirect("/register");

  // if we find user check for correct password and then loggin
  const isMatch = await bcrypt.compare(password, user.password);
  //if not matched
  if (!isMatch)
    return res.render("login", { email, message: "incorrect password" });
  //if matched
  const token = jwt.sign({ _id: user._id }, "abcdef");
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/user");
});

export default router;
