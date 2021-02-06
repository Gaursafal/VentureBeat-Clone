import React, { useState } from 'react'
import styles from '../Css/Machins.module.css'
import {useDispatch, useSelector} from 'react-redux';
// import { machinData}  from '../Redux/Machins/action';
import { Link, Route, useHistory } from 'react-router-dom';
import { NewsCard } from '../Component/NewsCard';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { machinData } from '../Redux/Machins/action';

export const MachinsPage = ()=>{
    const button = ["Computer Vision",
    "Deep Learning",
    "Machine Learning",
    "NLP","Robotics"]
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
    const handleCards=()=>{
        history.push("/machin/discover")
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
            <header className = {styles.header}>
                < >
                <div>
                    <Navbar/>
                </div>
                <h1 className = {styles.heading}>The Machine</h1>
                </>
                <div className = {styles.clear}></div>
                <div className = {styles.body1}>
                    <img src="https://venturebeat.com/wp-content/uploads/2019/02/uipath.jpg?resize=700%2C350&strip=all" alt="ai sorce"/>
                    <p>RPA startup UiPath raises $750 million</p>
                </div>
                <div className = {styles.body2}>
                    <div>
                    <img src="https://venturebeat.com/wp-content/uploads/2021/02/databricks.png?resize=700%2C350&strip=all" alt="ai sorce"/>
                    <p>Databricks raises $1 billion funding round at $28 billion valuation</p>
                    </div>
                    <div>
                        <img src="https://venturebeat.com/wp-content/uploads/2021/01/How-the-responsible-use-of-AI-can-create-a-better-health-system-01.jpg?w=350&h=175&crop=1" alt="ai sorce"/>
                        <p>How the responsible use of AI can help create a better health system (Sponsored)</p>
                    </div>
                </div>
            </header>
            <div className = {styles.body}>
                <h1>Discover</h1>
                {
                    button.map((item)=>(
                        <button onClick = {handleCards}>{item}</button>
                    ))
                }
            </div>
            <br/>
            <br/>
            {/* <Route path = "/ai/:id" render = {(props)=>} */}
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