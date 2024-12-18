import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { addCategory } from "../services/api.categories";
import { useNavigate } from "react-router-dom";

const categoryData = {
  name: "",
  description: "", // Optional
  icon: "",
};

const NewCategory = () => {
    const [newCategory,setNewCategory] = useState(categoryData)
    const navigate = useNavigate()
  const handleAddCategory = (e) => {
    e.preventDefault()
    //console.log(newCategory)
    const response = addCategory(newCategory)
    if(response){
      navigate(-1)
    }
  };
  return (
    <div>
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold mb-4 text-zinc-200">Add Category</h2>
        <form
          onSubmit={handleAddCategory}
          className="flex flex-col gap-4 bg-zinc-800 p-8 rounded-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-zinc-400 text-lg mb-1">
              Name
            </label>
            <input
              id="name"
              onChange={(e) =>setNewCategory({...newCategory, name: e.target.value})}
              className=" bg-dark_background rounded-md p-2 focus:outline-none border-dark_background border-2 focus:border-zinc-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-zinc-400 text-lg mb-1">
              Description
            </label>
            <input
              id="description"
              onChange={(e) =>setNewCategory({...newCategory, description: e.target.value})}
              className=" bg-dark_background rounded-md p-2 focus:outline-none border-dark_background border-2 focus:border-zinc-600"
            />
          </div>
          <div className="flex gap-4 items-center mt-2">
            <label htmlFor="icon" className="text-zinc-400 text-lg mb-1">
              Icon
            </label>
            <span className="w-20 h-12 border-2 border-zinc-600 rounded-lg flex justify-center items-center text-zinc-400">
              <FaAsterisk />
            </span>
          </div>
          <button
            type="submit"
            className="self-end bg-primary_purple px-8 py-2 rounded-md font-semibold"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
