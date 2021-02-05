import React from 'react'
import Footer from '../Component/Footer/Footer'
import Navpage from '../Component/Navbar/NavePage'
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