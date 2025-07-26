import express from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import Survey from "../models/Survey";
const userRouter = express.Router();
const surveyRouter = express.Router();

userRouter.get("/register", (req, res) => {
  return res.json({
    error: null,
  });
});

userRouter.post("/register", async (req, res) => {
  const { username, password, phonenumber, mail } = req.body;
  const name = await User.findOne({ username });
  if (name) {
    return res.json({
      error: "이미 사용중인 아이디 입니다.",
    });
  }
  const userpassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    password: userpassword,
    phonenumber,
    mail,
  });
  await user.save();
  return res.json({ message: "성공했습니다." });
});

surveyRouter.get("/register", (req, res) => {
  return res.json({
    error: null,
  });
});

surveyRouter.post("register", (req, res) => {
  const { age, sns, trend } = req.body;
  return res.json({
    error: null,
  });
});

userRouter.get("/login", (req, res) => {
  return res.json({
    error: null,
  });
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const name = await User.findOne({ username });
  if (!name) {
    return res.json({
      error: "존재하지 않는 아이디입니다.",
    });
  }
  const isCorrectPassword = await bcrypt.compare(password, name.password);
  if (!isCorrectPassword) {
    return res.json({
      error: "일치하지 않는 비밀번호 입니다.",
    });
  }
  const jwt = require("jsonwebtoken");
  const token = jwt.sign({
    username: name.username,
  });
  return res.json({
    token,
  });
});