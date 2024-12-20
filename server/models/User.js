import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const masterPasswordSchema = new mongoose.Schema({
  password: { type: String, default: process.env.ENCRYPTION_KEY },
});

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // This will store the encrypted password
    firstName: String,
    lastName: String,
    profilePicture: String, // Optional
    master: {type: masterPasswordSchema},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export const Master = mongoose.model("Master", masterPasswordSchema)

const User = mongoose.model("User", userSchema);
export default User;
