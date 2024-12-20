import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api.auth'
import { AuthContext } from '../context/authContext'

const formData = {
    fullname:"",
    email:"",
    password:""
}
const Register = () => {
    const { login, user } = useContext(AuthContext);
    const [newUser,setNewUser] = useState(formData)
    const [reTypedPassword,setReTypedPassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const handlePasswordMatch = (e) => {
        console.log("Password",newUser.password,"Confirm", e.target.value)
        if (newUser.password == e.target.value) {
            console.log("Printing")
          setError("");
        } else {
            console.log("Matched")
            setError("Password does not match");}
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            const response = await registerUser(newUser);
            if(response === true){
                login(newUser.email, newUser.password)
                if(user){
                  navigate("/setup-master")
                }
               
            }
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dark_background">
      <div className="w-[450px] bg-light_background p-8 rounded-lg shadow-md">
        <h2 className="text-primary_purple text-2xl font-bold mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full name"
            defaultValue={formData.fullname}
            onChange={(e) =>
              setNewUser({ ...newUser, fullname: e.target.value })
            }
            className=" bg-dark_background rounded-lg p-2   placeholder-zinc-600 text-zinc-400"
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={formData.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className=" bg-dark_background rounded-lg p-2   placeholder-zinc-600 text-zinc-400"
          />
          <input
            type="password"
            placeholder="Password"
            defaultValue={formData.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className=" bg-dark_background rounded-lg p-2  placeholder-zinc-600 text-zinc-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handlePasswordMatch}
            className=" bg-dark_background rounded-lg p-2  placeholder-zinc-600 text-zinc-400"
          />

          <button
            type="submit"
            className="bg-primary_purple py-2 rounded-lg text-purple-50"
          >
            Register
          </button>
        </form>
        {error && <p className="text-sm text-red-500 mt-4">* {error}</p>}
        <p className="text-sm text-zinc-400 mt-4">
          Already have an account?{" "}
          <span className="text-purple-700 hover:text-purple-400">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register