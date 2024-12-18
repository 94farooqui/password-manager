import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { getUserDetails } from "../controllers/userController.js";

const router = express.Router();

router.get("/:userId", getUserDetails )

export default router



