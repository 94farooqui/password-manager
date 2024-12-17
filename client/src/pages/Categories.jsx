import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate()
    const [categories,setCategories] = useState()

    if(!categories) return <p className='mt-8 ml-8  text-zinc-500 hover:text-zinc-400 flex items-center gap-4 text-lg'>Add Your First Category <button onClick={()=>navigate('new-category')} className='inline'><FaCirclePlus/></button></p>
  return (
    <div>

    </div>
  )
}

export default Categories