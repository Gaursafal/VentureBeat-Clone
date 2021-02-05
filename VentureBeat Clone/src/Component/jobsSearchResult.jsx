import React, { useState } from "react"
import {useSelector} from "react-redux"
import styles from "../Css/jobsPage.module.css"
import {Typography} from "@material-ui/core"
import { JobCardInfo } from "./JobCardInfo"

function SearchResults (){
    const filteredData=useSelector(state=>state.jobs.filteredData)
    const [item,setItem] = useState(filteredData[0])
    console.log(filteredData)
    const handleItem = (data)=>{
        setItem(data)
    }
    return(
        <>
        <div style = {{width:"25%", float:"left",height:600,overflowY:"scroll"}}>
            {filteredData.map(data=>(
                
                <div className={styles.jobsSearchCard} key={data.job_id} onClick ={()=>handleItem(data)}>
                <img className={styles.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/johnson-controls-logo-1612350900919.png" alt="heins" />
                <div className={styles.jobs}>
                    <Typography variant="h6">{data.profile_name}</Typography>
                    <Typography variant="body2">{data.company_name}</Typography>
                    <Typography variant="body2">{data.location}</Typography>
                </div>
            </div>

            ))}
        </div>
        <div className = {styles.card}>
            <JobCardInfo item = {item}/>
        </div>
        </>
    )
}

export default SearchResults