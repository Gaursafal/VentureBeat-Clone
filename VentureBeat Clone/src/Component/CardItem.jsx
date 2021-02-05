import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from '../Css/CradItem.module.css'
import { CommanAdd } from './CommanAdd'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { VentureBeatAdd } from './VentureBeatAdd'
export const CradItem = ()=>{
    const {id} = useParams()
    const data = useSelector((state)=>state.ai.aiData)
    const [item,setItem] = useState({})
    

    const handleItem =(num)=>{
        const items  = data?.find((item)=>item.id === Number(num))
         setItem(items)
        
    }
    React.useEffect(()=>{
        handleItem(id)
        console.log(item)
    },[])
    return(
        <>
        
        <div className = {styles.header}>
            <Navbar/>
            <br/>
            <div className = {styles.head}>
                <h1>{item.title}</h1>
                <div className = {item.cont}>
                    {item.author}
                    {item.date}
                </div>
                <div>
                    <img src={item.image} alt=""/>
                </div>
            </div>
        </div>
        
        <div className = {styles.space}>
        </div>
        
        <div className = {styles.container}>
            {
            item.content
            }
        </div>
        <div className = {styles.container}>
            <VentureBeatAdd/>
            
        </div>
        <div className={styles.bottom}>
            <CommanAdd/>
        </div>
        <div>
            <Footer/>
        </div>
        
        
        </>
    )
}