import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Linked to the user
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref : "Category"},
  title: { type: String, required: true }, // e.g., "Google Account"
  username: { type: String, required: true }, // e.g., "user@gmail.com"
  encryptedPassword: { type: String, required: true }, // Encrypted password
  url: { type: String }, // e.g., "https://accounts.google.com/"
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Password = mongoose.model("Password", passwordSchema);
export default Password;
