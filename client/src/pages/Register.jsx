import React, { useState } from 'react'

const formData = {
    fullname:"",
    emial:"",
    password:""
}
const Register = () => {

    const [reTypedPassword,setReTypedPassword] = useState("")

    const handleSubmit = () => {

    }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dark_background">
      <div className="w-[450px] bg-light_background p-8 rounded-lg shadow-md">
        <h2 className="text-primary_purple text-2xl font-bold mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Full name"
            value={formData.fullname}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border border-primary_purple rounded-lg p-2 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-primary_purple rounded-lg p-2 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border border-primary_purple rounded-lg p-2 text-white"
          />
          <button
            type="submit"
            className="bg-primary_purple py-2 rounded-lg text-purple-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register