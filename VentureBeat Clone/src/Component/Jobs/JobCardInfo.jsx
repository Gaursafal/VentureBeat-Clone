import React from 'react'
import styles from '../../Css/JobCardInfo.module.css'
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Icon } from '@material-ui/core';
export const JobCardInfo = ({item})=>{
    return(
        <div className = {styles.main}>
            <header className = {styles.header}>
               <h1>{item.profile_name}</h1> 
               <div className = {styles.para}>
                  <h3 className = {styles.flex}> <Icon><ApartmentIcon/></Icon>
                 <div className = {styles.red}>  {item.company_name}</div></h3>
                <h3 className = {styles.flex}><Icon><LocationOnIcon/></Icon>
                   <div> {item.location}</div></h3>  
               </div>
               <div><h4>Description : {item.description}</h4></div>
               <div><h4>Role : {item.role}</h4></div>
               <div className = {styles.para}>
                   <button className = {styles.button}><>Save Job</></button>
                   <button className = {styles.button2}><div className = {styles.redback}>Apply</div></button>
               </div>
            </header>
            <div className = {styles.cont}>
                <h1>Job Description</h1>
                <ul>
                {
                item.job_description.map((points)=>(
                    <li>{points}</li>
                ))
                }
                </ul>
            </div>
                <div className = {styles.header} >
                    <button className = {styles.button2}>
                        <div className = {styles.redback}>Apply</div>
                        </button>
                </div>
        </div>
    )
}