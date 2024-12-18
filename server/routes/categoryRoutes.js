import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { addCategory,getAllCategories } from "../controllers/categoryController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/",authenticate,addCategory)
router.get("/", authenticate,getAllCategories);

export default router