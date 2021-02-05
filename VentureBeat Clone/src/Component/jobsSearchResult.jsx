import React, { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
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
        <div>
            {filteredData.map(data=>(
                <div onClick = {()=>handleItem(data)}>{data.profile_name}</div>

            ))}
        </div>
        <div>
            <JobCardInfo item = {item}/>
        </div>
        </>
    )
}

export default SearchResults