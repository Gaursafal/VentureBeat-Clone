import {GOOGLE_AUTH_FAILURE,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_REQUEST} from "./actionType.js"
    

export const googleAuthRequest=()=>({
type:GOOGLE_AUTH_REQUEST
})
export const googleAuthSuccess=(payload)=>({
type:GOOGLE_AUTH_SUCCESS,
payload
})
export const googleAuthFailure=(payload)=>({
type:GOOGLE_AUTH_FAILURE,
payload
})