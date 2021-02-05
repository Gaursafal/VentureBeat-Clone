import React from "react"
import GoogleLogin from "react-google-login"
// import {googleAuthSuccess,googleAuthFailure} from "../redux/LoginRedux/actionCreate"
import { useDispatch, useSelector } from "react-redux";
import { googleAuthSuccess,googleAuthFailure } from "../../Redux/LoginRedux/actionCreate";
import {useHistory} from "react-router-dom"
function Google ({className}){
    
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.google.userData)
    const isAuth=useSelector((state)=>state.isAuth);
    console.log(userData)
    const history=useHistory()
    const successGoogle=(response)=>{
      //  console.log(response.Fs)
      dispatch(googleAuthSuccess(response.Fs))
      history.push('/jobs')
       
    }
    const failureGoogle=(response)=>{
        console.log(response.Fs)
        dispatch(googleAuthFailure(response))
<<<<<<< HEAD
        history.push("/jobs")
=======

>>>>>>> 1c61d01853754f9bf9af0a40efea0fcc8e36e189
    }
    return(
        <>
        <GoogleLogin
        className={className}
        style={{padding:"10px 10px 10px 10px"}}
        clientId="946590538565-n3bmpjqifi9ll6qbodb3kqsngnrn07ke.apps.googleusercontent.com"
        buttonText="SIGN IN WITH GOOGLE"
        onSuccess={successGoogle}
        onFailure={failureGoogle}
       
        />
        </>
    )
}export default Google