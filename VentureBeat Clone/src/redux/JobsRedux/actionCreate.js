import {JOBS_DATA_FAILURE,
    JOBS_DATA_SUCCESS,
    JOBS_DATA_REQUEST,
JOBS_DATA_FILTERED} from "./actionType.js"
import axios from "axios"        

export const jobsDataRequest=()=>({
type:JOBS_DATA_REQUEST
})
export const jobsDataSuccess=(payload)=>({
type:JOBS_DATA_SUCCESS,
payload
})
export const jobsDataFailure=(payload)=>({
type:JOBS_DATA_FAILURE,
payload
})

export const jobsDataFiltered=(payload)=>({
    type:JOBS_DATA_FILTERED,
    payload
})

export const getJobsData=()=>(dispatch)=>{
dispatch(jobsDataRequest())
 return axios({
    method:"GET",
    url:"https://data-practice.herokuapp.com/db"
}).then((res)=> dispatch(jobsDataSuccess(res.data.data)))
}