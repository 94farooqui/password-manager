import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { getUserDetails, setupMaster } from "../controllers/userController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:userId", getUserDetails )
router.post("/master", authenticate, setupMaster)

export default router



