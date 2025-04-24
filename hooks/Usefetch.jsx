import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { axiosinstance } from '../Config/axiosinstance'

function Usefetch(url) {

const [data,setData]=useState({})                                                                       
const [Isloading,setIsloading] = useState(true)
const [error,setError] = useState(null)

    const fetchData = async () => {
        try{
            const response = await axiosinstance({method:"GET",url:url})
            setData(response?.data?.data)

            setIsloading(false)

        }catch(error){
            console.log(error)
            setError(error)
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[])

  return [data,Isloading,error]
}

export default Usefetch