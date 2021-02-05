import React from 'react'
import styles from '../Css/GamesPage.module.css'
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';
import Posts from '../Component/Posts';

export const GamesPage = ()=>{
    
    
    return(
        <>
            <header className = {styles.header}>
                < >
                <div>
                    <Navbar/>
                </div>
                <h1 className = {styles.heading}>GamesBeat</h1>
                </>
                <div className = {styles.clear}></div>
                <div className = {styles.body1}>
                    <img src="https://venturebeat.com/wp-content/uploads/2020/11/ps5-to-scale.jpg?w=1024" alt="ai sorce"/>
                    <p>Sony is selling PlayStation 5 hardware at a loss</p>
                </div>
                <div className = {styles.body2}>
                    <div>
                    <img src="https://venturebeat.com/wp-content/uploads/2021/02/war.jpg?resize=350%2C175&strip=all" alt="ai sorce"/>
                    <p>Sega’s The Creative Assembly unveils Total War: Warhammer III</p>
                    </div>
                    <div>
                        <img src="https://venturebeat.com/wp-content/uploads/2019/08/border-flak-4.jpg?w=1024" alt="ai sorce"/>
                        <p>Embracer Group acquires Borderlands maker Gearbox Entertainment for $1.3 billion</p>
                    </div>
                </div>
            </header>
            <br/>
            <Posts/>
            {/* <Route path = "/ai/:id" render = {(props)=>} */}
            <div>
                <Footer/>
            </div>
             
        </>
    )
}