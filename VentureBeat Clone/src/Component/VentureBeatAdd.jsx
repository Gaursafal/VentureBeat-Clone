import Recat from 'react'
import styles from '../Css/VentureBeatAdd.module.css'

export const VentureBeatAdd = ()=>{
    return(
        <div className = {styles.body}>
            <h1>VentureBeat</h1>
            <br/>
            
            <p>VentureBeat's mission is to be a digital town square for technical decision-makers to gain knowledge about transformative technology and transact. Our site delivers essential information on data technologies and strategies to guide you as you lead your organizations. We invite you to become a member of our community, to access:</p>
            
            <br/>
            <ul>
                <li>up-to-date information on the subjects of interest to you</li><br/>
                <li>our newsletters</li><br/>
                <li>gated thought-leader content and discounted access to our prized events, such as Transform</li><br/>
                <li>networking features, and more</li><br/>
            </ul>
        </div>
    )
}