import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    icon : { type: String},
    description: String, // Optional
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const Category = mongoose.model('Category', categorySchema);

  export default Category
  