import React, { useEffect, useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../services/api.categories';
import CategoryCard from '../components/CategoryCard';
import { FaPlus } from "react-icons/fa";

const Categories = () => {
    const navigate = useNavigate()
    const [categories,setCategories] = useState()

    useEffect(()=>{
      const fetchCategories = async () => {
        const data = await getAllCategories()
        if(data){
          setCategories(data)
          localStorage.setItem("categories", JSON.stringify(data))
        }
      }
      fetchCategories()
    },[])

    if(!categories) return <p className='mt-8 ml-8  text-zinc-500 hover:text-zinc-400 flex items-center gap-4 text-lg'>Add Your First Category <button onClick={()=>navigate('new-category')} className='inline'><FaCirclePlus/></button></p>
  return (
    <div className="p-8">
      <h4 className="text-zinc-200 font-semibold text-2xl mb-4">Categories</h4>
      <div className="grid grid-cols-4 gap-4 ">
        {categories.map((category) => (
          
            <CategoryCard key={category.name} category={category} />
         
        ))}
        <Link to="new-Category">
          <div className="flex justify-center items-center h-24 bg-light_background rounded-md text-2xl text-zinc-600">
            <FaPlus />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories