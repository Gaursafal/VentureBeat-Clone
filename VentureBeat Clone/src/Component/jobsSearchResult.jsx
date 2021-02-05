import React, {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import styles from '../Css/JobFilter.module.css'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function SearchResults (){
    var filteredData= useSelector(state=>state.jobs.filteredData)
    
    const [date, setDate] = useState('')
    const [contract, setContract] = useState('all')
    const permanentJob = filteredData.filter(job => job.job_type === "Permanent Job")
    const internationalJob = filteredData.filter(job => job.job_type === "International")
    const remoteJob = filteredData.filter(job => job.job_type === "Work From Home")
   
    console.log(filteredData)
    return(
        <>
        <div style = {{display:"flex"}}>

        <div>
             <Card className={styles.root}>
            <CardContent>
            <CardActions>
            <Typography variant = "p" className = {styles.subHeading}>Contract Filter</Typography>
            </CardActions>

            <div className = {styles.formBox}>
            <FormControl component="fieldset">          
           <RadioGroup aria-label="date-posted" name="date" onChange = {(e) => setContract(e.target.value)}>
               <FormControlLabel value="all" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>All</span>}  className = {styles.formElement}/>
               <FormControlLabel value="fullTime" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>full-time</span>}  className = {styles.formElement}/>
               <FormControlLabel value="contract" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>contract</span>}  className = {styles.formElement}/>
               <FormControlLabel value="temporary" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>temporary</span>}  className = {styles.formElement}/>
               <FormControlLabel value="partTime" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>part-time</span>}  className = {styles.formElement}/>
               <FormControlLabel value="internship" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>Internship</span>}  className = {styles.formElement}/>
               <FormControlLabel value="flexible" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>Flexible</span>}  className = {styles.formElement}/>
               <FormControlLabel value="remotePartTime" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>Remote Part Time</span>}  className = {styles.formElement}/>
           </RadioGroup>
           </FormControl>             
            </div>               
        </CardContent>    
        </Card>
        <Card className={styles.root}>
            <CardContent>
            <CardActions>
            <Typography variant = "p" className = {styles.subHeading}>Date Posted</Typography>
            </CardActions>

            <div className = {styles.formBox}>

            <FormControl component="fieldset">
           
            <RadioGroup aria-label="date-posted" name="date" onChange = {(e) => setDate(e.target.value)}>
                <FormControlLabel value="all" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>All</span>}  className = {styles.formElement}/>
                <FormControlLabel value="24" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>Last 24 hours</span>}  className = {styles.formElement}/>
                <FormControlLabel value="7" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>Last 7 Days</span>}  className = {styles.formElement}/>
                <FormControlLabel value="28" control={<Radio />}  label={<span style={{ fontSize: '12px' }}>Last 28 Days</span>}  className = {styles.formElement}/>
               
            </RadioGroup>
            </FormControl>         
            </div>     
           
        </CardContent>
      
        </Card>
        </div>

           
            <div>

             {contract === "all" && filteredData.map(data=>(
                <div>{data.profile_name}</div>

            ))}

            {contract === "fullTime" && permanentJob.map(job => {
                return <div>{job.job_type}</div>
            })}

            {contract === "contract" && internationalJob.map(job => {
                return <div>{job.job_type}</div>
            })}

            {contract === "remotePartTime" && remoteJob.map(job => {
                return <div>{job.job_type}</div>
            })}

            {contract === "temporary"  && <h1>Jobs not available..</h1>}
            {contract === "internship"  && <h1>Jobs not available..</h1>}
            {contract === "partTime"  && <h1>Jobs not available..</h1>}
            {contract === "flexible"  && <h1>Jobs not available..</h1>}


            </div>
            
        </div>
        </>
    )
}

export default SearchResults