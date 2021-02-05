import React from 'react'
import styles from "../Css/NewsCard.module.css"
export const NewsCard = ({item,handleClick})=>{

    return(
        <>
            <div onClick = {handleClick} className ={styles.main}>
                <img src={item.image} alt={item.title} />
                <div className = {styles.cont} >
                    <h1>{item.title}</h1>
                    <div className ={styles.body}>
                      <h3>{item.author}</h3>  {item.date}
                    </div>
                </div>
            </div>
        </>
    )
}