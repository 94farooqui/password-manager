import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt'

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  console.log(req.body)
  const { fullname,email, password } = req.body;
  try {
    const user = await User.create({ fullname,email, password });
    if(user){
      console.log(user)
      return res.status(201).json({ message: "User registered successfully" });
    }
    
  } catch (err) {
    console.log("err",err)
    return res.status(400).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  console.log("Login request received")
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if(!(await bcrypt.compare(password, user.password))){
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token });
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message });
  }
});

export default router;
