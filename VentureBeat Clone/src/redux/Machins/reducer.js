import { MACHIN_DATA_FAILURE, MACHIN_DATA_REQUEST, MACHIN_DATA_SUCCESS } from "./actionType"

const initState = {
    aiData : [],
    isloading : false,
    error : false
}
export const machinReducer = (state = initState,{type,payload})=>{
    switch(type){
        case MACHIN_DATA_REQUEST:
            return{
                ...state,
                isloading : true
            }
        case MACHIN_DATA_SUCCESS:
            return{
                ...state,
                isloading : false,
                aiData : payload,
                error : false
                
            }
        case MACHIN_DATA_FAILURE:
            return{
                ...state,
                isloading : false,
                error : true
            }
        default:
            return state
    }
}