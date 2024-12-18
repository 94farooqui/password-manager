import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";

import authRoutes from './routes/authRoutes.js'
import passwordRoutes from './routes/passwordRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

//database connection
connectDB()

// Routes
app.get("/", (req, res) => res.send("Password Manager API"));

app.use("/api/auth" , authRoutes)
app.use("/api/user", userRoutes);
app.use("/api/creds", passwordRoutes)
app.use("/api/categories", categoryRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// Database connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error(err));
