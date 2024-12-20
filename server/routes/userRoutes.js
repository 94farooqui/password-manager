import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import {
  getUserDetails,
  setupMaster,
  getMaster,
} from "../controllers/userController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:userId", getUserDetails )
router.get("/master", authenticate, getMaster);
router.post("/master", authenticate, setupMaster)

export default router



