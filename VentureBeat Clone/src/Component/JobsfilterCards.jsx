import react from "react"
import style from "../Css/jobsPage.module.css"
import {Typography} from "@material-ui/core"
function FilteredCard({data}){

    console.log(data)
    return(<>
            <div>
            
                
                <div className={style.jobsSearchCard} key={data.job_id}>
                <img className={style.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/johnson-controls-logo-1612350900919.png" alt="heins" />
                <div className={style.jobs}>
                    <Typography variant="h6">{data.profile_name}</Typography>
                    <Typography variant="body2">{data.company_name}</Typography>
                    <Typography variant="body2">{data.location}</Typography>
                </div>
            </div>

        
        </div>
    </>)
}

export default FilteredCard