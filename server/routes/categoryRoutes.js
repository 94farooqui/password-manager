import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { addCategory,getAllCategories } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", addCategory)
router.get("/",getAllCategories)

export default router