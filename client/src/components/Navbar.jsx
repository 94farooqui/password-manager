import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleAddCreds = () => {
    navigate("/add-creds");
  }
  return (
    <div className="absolute top-0 left-0 border-b border-zinc-700 w-screen h-16 flex justify-between items-center bg-light_background py-4 px-8">
      <div>
        <h1 className="text-2xl font-semibold text-primary_purple">Securate</h1>
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li className="flex gap-2 items-center bg-dark_background py-2 px-4 rounded-full">
            <FaSearch className="opacity-50"/>
            <input placeholder="search" className="bg-transparent" />
          </li>
          <li onClick={handleAddCreds}>
            <FaCirclePlus className="bg-transparent border-2 text-primary_purple border-primary_purple hover:bg-primary_purple hover:text-white rounded-full text-3xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
