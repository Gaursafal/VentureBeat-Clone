import React from "react"
import {useDispatch,useSelector} from "react-redux"

function SearchResults (){
    const filteredData=useSelector(state=>state.jobs.filteredData)
    console.log(filteredData)
    return(
        <>
        <div>
            {filteredData && filteredData.map(data=>({
                

            }))}
        </div>
        </>
    )
}

export default SearchResults