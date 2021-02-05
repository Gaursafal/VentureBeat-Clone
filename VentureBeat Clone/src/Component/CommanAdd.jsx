import styles from '../Css/CommanAdd.module.css'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


export const CommanAdd = ()=>{
    return(
        <div>
            <div className = {styles.bottom}>
            <div>
                <h3>Transform 2021</h3>
                <p>Join us for the world’s leading event about accelerating enterprise transformation with AI and Data, for enterprise technology decision-makers, presented by the #1 publisher in AI and Data</p>
            </div>
            <div>
                <h4>Search jobs and find your dream job today.</h4>
                <Typography variant="h4">
                  <Link to="/jobs">Get Hired</Link>  
                    </Typography>
                
            </div>
        </div>
        </div>
    )
}