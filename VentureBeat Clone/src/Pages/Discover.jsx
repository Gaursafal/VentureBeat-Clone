import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import { NewsCard } from '../Component/NewsCard'
import {machinData}  from '../Redux/Machins/action.js'
export const Discover = ()=>{
    const dispatch = useDispatch()
    const datas = useSelector((state)=>state.ai.aiData)
    const [data,setData] = useState([])
    const history = useHistory()
    const handleData = ()=>{
        const items = datas.filter((item)=>item.category == "ai")
        setData(items)
    }
    const handleClick =(id)=>{
        history.push(`/ai/${id}`)
    }
    React.useEffect(()=>{
        dispatch(machinData())
        
    },[])
    React.useEffect(()=>{
        handleData()
        console.log(data)
    },[])
    return(
        <>
       <div>
           <Navbar/>
       </div>
        <div>
        {
            data?.map((item)=>(
                <NewsCard item = {item} handleClick = {()=>handleClick(item.id)}/>
            ))
        }
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}