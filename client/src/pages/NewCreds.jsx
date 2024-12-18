import React, { useEffect, useState } from 'react'
import { addNewCreds } from '../services/api.paswords';
import { useNavigate } from 'react-router-dom';

const newCredsData = {
  title: "",
  username:"",
  password:"",
  url: "",
  categoryId:""
};

const NewCreds = () => {
    const [newCreds,setNewCreds] = useState(newCredsData)
    const [loading,setLoading] = useState(false)
    const [categories,setCategories] = useState(null)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setNewCreds({...newCreds, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        setLoading(true)
        const categoriesData = localStorage.getItem("categories")
        if(categoriesData){
            setLoading(false)
            setCategories(JSON.parse(categoriesData))
        }
    },[])
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const response = await addNewCreds(newCreds)
        if(response){
            navigate(-1)
        }
    }

    if(loading){
        return <p>Loading...</p>
    }
  return (
    <div>
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold mb-4 text-zinc-100">
          Add New Credentials
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4 bg-zinc-800 p-8 rounded-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="title" className="text-zinc-400 text-lg mb-1">
              Title
            </label>
            <input
              onChange={handleChange}
              name="title"
              id="title"
              className=" bg-dark_background rounded-md p-2  text-zinc-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-zinc-400 text-lg mb-1">
              username
            </label>
            <input
              onChange={handleChange}
              name="username"
              id="username"
              className=" bg-dark_background rounded-md p-2  text-zinc-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-zinc-400 text-lg mb-1">
              password
            </label>
            <input
            type="password"
              onChange={handleChange}
              name="password"
              id="password"
              className=" bg-dark_background rounded-md p-2  text-zinc-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-zinc-400 text-lg mb-1">
              URL
            </label>
            <input
              onChange={handleChange}
              name="url"
              id="url"
              className=" bg-dark_background rounded-md p-2  text-zinc-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-zinc-400 text-lg mb-1">
              Category
            </label>
            {categories && (
              <select
                className=" bg-dark_background rounded-md p-2  text-zinc-400"
                name="categoryId"
                onChange={handleChange}
              >
                <option disabled value="">
                  Select Category
                </option>
                {categories.map((category) => (
                  <option
                    value={category._id}
                    className=" text-zinc-400"
                    key={category._id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button className="bg-primary_purple self-end px-8 py-2 rounded-md mt-4">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCreds