import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const CategoryCard = ({category}) => {
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div className='relative flex flex-col h-24 bg-light_background p-4 rounded-md group'>
        <p className='text-zinc-300 font-semibold'>{category.name}</p>
        <p className='text-sm line-clamp-2 text-zinc-500'>{category.description}</p>
        <button className='hidden group-hover:block absolute top-4 right-2 text-zinc-500 hover:text-zinc-300'><BsThreeDotsVertical/></button>
        {showMenu && <div></div>}
    </div>
  )
}

export default CategoryCard