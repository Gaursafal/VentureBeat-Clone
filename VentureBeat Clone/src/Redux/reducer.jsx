import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from './actionTypes'

const initState = {
    posts : [],
    isLoading : false,
    isError : false
}

export const reducer = (state = initState, {type, payload}) => {
switch(type){
    case GET_POSTS_REQUEST:
        return {
            ...state,
            isLoading : true
        }
    case GET_POSTS_SUCCESS:
        return {
            ...state,
            isLoading : false,
            posts : payload
        }
    case GET_POSTS_FAILURE:
        return {
            ...state,
            isLoading : false,
            isError : true
        }
    default: 
    return state
}
}