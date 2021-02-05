import React from "react"
import {useSelector} from "react-redux"
import styles from "../Css/jobsPage.module.css"
import {Typography} from "@material-ui/core"

function SearchResults (){
    const filteredData=useSelector(state=>state.jobs.filteredData)
    console.log(filteredData)
    return(
        <>
        <div>
            {filteredData.map(data=>(
                
                <div className={styles.jobsSearchCard} key={data.job_id}>
                <img className={styles.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/johnson-controls-logo-1612350900919.png" alt="heins" />
                <div className={styles.jobs}>
                    <Typography variant="h6">{data.profile_name}</Typography>
                    <Typography variant="body2">{data.company_name}</Typography>
                    <Typography variant="body2">{data.location}</Typography>
                </div>
            </div>

            ))}
        </div>
        </>
    )
}

export default SearchResults