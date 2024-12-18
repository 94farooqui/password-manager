import { Button } from '@/components/ui/button'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[user])
  return (
    <div>
        <button className='bg-zinc-800 text-zinc-50 px-8 py-1 rounded-lg'>Hello</button>
        
    </div>
  )
}

export default Home