import React, { useState } from 'react'

const newCredsData = {
  title: "",
  username:"",
  password:"",
  url: ""
 
};

const NewCreds = () => {
    const [newCreds,setNewCreds] = useState(newCredsData)
    const handleFormSubmit = () => {

    }
  return (
    <div cla>
      <div className='px-8 py-8'>
        <h2 className='text-2xl font-bold mb-4'>Add New Credentials</h2>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 bg-zinc-800 p-8 rounded-lg'>
          <div className='flex flex-col'>
            <label for="title" className='text-zinc-400 text-lg mb-1'>Title</label>
            <input name="title" id="title" className=' bg-dark_background rounded-md p-2' />
          </div>
          <div className='flex flex-col'>
            <label for="username" className='text-zinc-400 text-lg mb-1'>username</label>
            <input name="username" id="username" className=' bg-dark_background rounded-md p-2' />
          </div>
          <div className='flex flex-col'>
            <label for="password" className='text-zinc-400 text-lg mb-1'>password</label>
            <input name="password" id="password" className=' bg-dark_background rounded-md p-2' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewCreds