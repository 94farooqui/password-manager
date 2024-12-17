import React from 'react'
import { RiHome9Line } from "react-icons/ri";
import { RiKanbanView2 } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";
import { RiSettings4Line } from "react-icons/ri";
import { RiDeleteBin3Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="h-full bg-light_background border-r-2 text-zinc-400 border-zinc-700">
      <div className=" h-full rounded-lg flex flex-col justify-between">
        <ul className="flex flex-col">
          <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer"><RiHome9Line className='text-lg'/> Home</li>
          <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer"><RiKanbanView2 className='text-lg'/>Categories</li>
          <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer"><RiBookOpenLine className='text-lg'/>Notes</li>
          <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer"><RiSettings4Line className='text-lg'/>Settings</li>
          <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer"><RiDeleteBin3Line className='text-lg'/>Trash</li>
        </ul>
        <div className="p-2">
          <p className="bg-dark_background p-2 rounded-md">
            Mubasshir Farooqui
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar