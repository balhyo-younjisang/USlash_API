import express from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
const userRouter = express.Router();

userRouter.get("/register", (req, res) => {
  return res.json({
    error: null,
  });
});

userRouter.post("/register", async (req, res) => {
  const { username, password, gender, birth } = req.body;
  const name = await User.findOne({ username });
  if (name) {
    return res.json({
      error: "이미 사용중인 아이디 입니다.",
    });
  }
  const userpassword = await bcrypt.hash(password,10)
  const user = new User({
    username,
    password: userpassword,
    gender,
    birth
  })
  await user.save()
  return res.json({message: "성공했습니다."})
})


