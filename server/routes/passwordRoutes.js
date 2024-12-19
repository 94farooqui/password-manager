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
      encryptedPassword,
      ...req.body
    });
    res.status(201).send("Creds added");
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

// Update a password
router.put("/:id", authenticate, async (req, res) => {
  try {
    const updatedPassword = await Password.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updatedPassword || updatedPassword.userId.toString() !== req.user.id) {
      return res.status(404).json({ error: "Password not found" });
    }

    
    return res.status(201).json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
