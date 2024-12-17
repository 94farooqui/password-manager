import express from "express";
import Password from "../models/Password.js";
import { encrypt, decrypt } from "../utils/securePassword.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add a new password
router.post("/", authenticate, async (req, res) => {
  const { title, username, password, url } = req.body;
  try {
    const encryptedPassword = encrypt(password);
    const newPassword = await Password.create({
      userId: req.user.id,
      title,
      username,
      encryptedPassword,
      url,
    });
    res.status(201).json(newPassword);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all passwords
router.get("/", authenticate, async (req, res) => {
  try {
    const passwords = await Password.find({ userId: req.user.id });
    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get decrypted password
router.get("/:id", authenticate, async (req, res) => {
  try {
    const passwordEntry = await Password.findById(req.params.id);
    if (!passwordEntry || passwordEntry.userId.toString() !== req.user.id) {
      return res.status(404).json({ error: "Password not found" });
    }

    const decryptedPassword = decrypt(passwordEntry.encryptedPassword);
    res.status(200).json({ ...passwordEntry._doc, password: decryptedPassword });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a password
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const passwordEntry = await Password.findById(req.params.id);
    if (!passwordEntry || passwordEntry.userId.toString() !== req.user.id) {
      return res.status(404).json({ error: "Password not found" });
    }

    await Password.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Password deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
