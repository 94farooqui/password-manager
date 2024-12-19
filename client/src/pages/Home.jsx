import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { fetchPasswords } from '../services/api.paswords'
import CredEntry from '../components/CredEntry'


const Home = () => {
    const {user} = useContext(AuthContext)
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const [data,setData] = useState(null)

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[user])

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetchPasswords();
            if(data){
                setLoading(false)
                console.log(data)
                setData(data)
            }
        }
        if(user){

            fetchData()
        }
    },[])

    if(loading){
        return <p>Loading...</p>
    }
  return (
    <div className='p-8 grid grid-cols-4 gap-4'>
        {data.map(entry => <CredEntry key={entry._id} entry={entry}/>)}
        
    </div>
  )
}

export default Home