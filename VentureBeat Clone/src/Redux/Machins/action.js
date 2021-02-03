import { MACHIN_DATA_FAILURE, MACHIN_DATA_REQUEST, MACHIN_DATA_SUCCESS } from "./actionType"
import axios from 'axios'

export const machinDataRequest = (payload)=>{
    return{
        type : MACHIN_DATA_REQUEST,
        payload
    }
}
export const machinDataSuccess = (payload)=>{
    return{
        type : MACHIN_DATA_SUCCESS,
        payload
    }
}
export const machinDataFailure = (payload)=>{
    return{
        type : MACHIN_DATA_FAILURE,
        payload
    }
}
export const machinData = (payload)=>(dispatch)=>{
    dispatch(machinDataRequest())

    let config = {
        method: "get",
        url: "https://venturebeat-clone.herokuapp.com/posts",
        
    }

    axios(config)
        .then((res) => dispatch(machinDataSuccess(res.data)))
        .catch((err) => dispatch(machinDataFailure(err)))
} 