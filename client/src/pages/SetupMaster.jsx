import React, { useState } from 'react'
import { setupMaster } from '../services/api.paswords'
import { useNavigate } from 'react-router-dom'

const SetupMaster = () => {
  const 
    const [password,setPassword] = useState("")
    const [error,setError] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form submit")
        
        const response = await setupMaster(password);

        if (response) {
          navigate("/");
        }
        else setError("Something went wrong, you can try again or SKIP")
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[50%] bg-zinc-800 p-8 rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 items-center">
            <label htmlFor="master" className="text-2xl text-zinc-200">
              Setup Master Password
            </label>
            <input
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="master"
              id="master"
              className="p-4 text-xl text-center text-zinc-400 bg-dark_background rounded-lg w-full focus:outline-none"
            />
            <p className="text-zinc-500">Set the password and press ENTER</p>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
        <button className="absolute bottom-4 right-4 px-8 py-2 text-xl rounded-md bg-zinc-800 text-zinc-400 font-semibold">
          Skip
        </button>
      </div>
    </div>
  );
}

export default SetupMaster