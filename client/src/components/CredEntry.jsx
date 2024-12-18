import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const CredEntry = ({ entry }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef()

  const handleOutsideClick = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target)){
        setShowMenu(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("mousedown", handleOutsideClick)

    return ()=>window.removeEventListener("mousedown", handleOutsideClick)
  },[])

  const handleRightClick = (e) => {
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setShowMenu(true);
    e.preventDefault();
  };
  return (
    <div className="relative bg-zinc-800 p-4 rounded-md">
      <h4 className="text-xl font-semibold">{entry.title}</h4>
      <div className="text-sm text-zinc-500  flex flex-col gap-1">
        <p className="line-clamp-1">username: {entry.username}</p>
        <p>password: ********</p>
      </div>
      <span
        className="absolute top-2 right-2 p-1 hover:bg-zinc-600 rounded-lg"
        onClick={() => setShowMenu(true)}
      >
        <BsThreeDotsVertical />
      </span>
      {showMenu && (
        <div
          ref={menuRef}
          className={`absolute top-8 text-zinc-400 right-4 bg-zinc-700 overflow-hidden rounded-md transform transition duration-300 ease-in-out ${
            showMenu
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col  text-sm text-zinc-400">
            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer">
              Edit
            </li>
            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer">
              Delete
            </li>
            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer">
              Copy Username
            </li>
            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer">
              Copy Password
            </li>
            <li className="py-2 px-4 hover:bg-zinc-600 cursor-pointer ">
              Copy URL
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CredEntry;
