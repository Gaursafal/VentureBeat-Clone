import React from 'react'
import Footer from '../Component/Footer'
import Navpage from '../Component/NavePage'
import Posts from '../Component/Posts'
export const HomePage = ()=>{
    return(
        <>
        
        <div>
            <Navpage/>
        </div>
        <div><Posts/></div>
        <div><Footer/></div>
        </>
    )
}