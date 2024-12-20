import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { fetchPasswords, getMasterPassword } from '../services/api.paswords'
import CredEntry from '../components/CredEntry'


const Home = () => {
    const {user,masterNeeded} = useContext(AuthContext)
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const [data,setData] = useState(null)

    useEffect(()=>{
        const getMaster = async () => {
            const data = await getMasterPassword()
            if(!data){
                setLoading(false)
                navigate("/setup-master")
            }
        }
        if(!user){
            navigate("/login")
        }
        else {
            if(localStorage.getItem("masterNeeded")){
                if(localStorage.getItem("masterNeeded") == true){
setLoading(true);
getMaster();
                }
            }
            
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