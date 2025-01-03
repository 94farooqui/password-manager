import React, { useContext, useEffect, useState } from 'react'
import { RiHome9Line } from "react-icons/ri";
import { RiKanbanView2 } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";
import { RiSettings4Line } from "react-icons/ri";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { getUserDetails } from '../services/api.auth';
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
    const {user, logout} = useContext(AuthContext)
    const [userDetails,setUserDetails] = useState(null)

    useEffect(()=>{
        const fetchUserDetails = async (userId) => {
            const data = await getUserDetails(userId)
            if(data){
                console.log(data)
                setUserDetails(data)
            }
        }
        if(user){
            fetchUserDetails(user.id)
        }
    },[])
  return (
    <div className="h-full bg-light_background border-r-2 text-zinc-400 border-zinc-700">
      <div className=" h-full rounded-lg flex flex-col justify-between">
        <ul className="flex flex-col">
          <Link to="/">
            <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer">
              <RiHome9Line className="text-lg" /> Home
            </li>
          </Link>
          <Link to="/categories">
            <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer">
              <RiKanbanView2 className="text-lg" />
              Categories
            </li>
          </Link>
          <Link to="/notes">
            <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer">
              <RiBookOpenLine className="text-lg" />
              Notes
            </li>
          </Link>
          <Link to="/settings">
            <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer">
              <RiSettings4Line className="text-lg" />
              Settings
            </li>
          </Link>
          <Link to="/trash">
            <li className="w-full px-4 py-2 hover:bg-dark_background hover:text-white flex gap-4 items-center cursor-pointer">
              <RiDeleteBin3Line className="text-lg" />
              Trash
            </li>
          </Link>
        </ul>
        <div className="p-2">
          <p className="bg-dark_background py-2 px-4 rounded-md ">
            {userDetails ? (
              <span className="flex items-center justify-between">
                {userDetails.fullname}{" "}
                <button onClick={logout}>
                  <IoMdLogOut />
                </button>
              </span>
            ) : (
              "Login"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar