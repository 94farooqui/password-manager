import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const CredEntry = ({ entry }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal,setShowModal] = useState(false)
  const menuRef = useRef()
  const [copyTarget,setCopyTarget] = useState()

  const handleCopy = async (target) => {
    try {
      if(target === "username") await navigator.clipboard.writeText(entry.username);
      if(target === "password") await navigator.clipboard.writeText(entry.password);
      if(target === "url") await navigator.clipboard.writeText(entry.url);

      console.log("text copied")
      setShowMenu(false)
      setTimeout(() => setIsCopied(false), 10000); // Reset after 5 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleOutsideClick = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target)){
        setShowMenu(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("mousedown", handleOutsideClick)

    return ()=>window.removeEventListener("mousedown", handleOutsideClick)
  },[])

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
              <Link to={`edit-creds/${entry._id}`} state={{creds:entry}}> Edit</Link>
            </li>

            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer" onClick={()=>handleCopy("username")}>
              Copy Username
            </li>
            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer" onClick={()=>handleCopy("password")}>
              Copy Password
            </li>
            <li className="py-2 px-4 border-b border-zinc-500 hover:bg-zinc-600 cursor-pointer " onClick={()=>handleCopy("url")}>
              Copy URL
            </li>
            <li className="py-2 px-4  hover:bg-zinc-600 cursor-pointer" onClick={()=>setShowModal(true)}>
              Delete
            </li>
          </ul>
        </div>
      )}
      {showModal && <div className="w-screen h-screen z-40 absolute top-0 left-0 flex justify-center items-center bg-zinc-900 bg-opacity-30">
        <div className="w-[300px] p-8 rounded-md flex flex-col gap-4 bg-zinc-600">
          <p>Are you sure want to delete</p>
          <div>
            <button onClick={()=>setShowModal(false)}>Cancel</button>
            <button>Yes</button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default CredEntry;
