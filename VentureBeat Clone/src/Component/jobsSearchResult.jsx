import React, {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';

import {Card,Grid} from '@material-ui/core';
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

import FilteredCard from "./JobsfilterCards";
import SearchBar from "./SearchBar"
import { JobCardInfo } from "./JobCardInfo";
import Navbar from "./Navbar";

function SearchResults (){
    const filteredData= useSelector(state=>state.jobs.filteredData)
    
    const [date, setDate] = useState('')
    const [contract, setContract] = useState('all')
    const [item,setItem] = useState(filteredData[0])

    const permanentJob = filteredData.filter(job => job.job_type === "Permanent Job")
    const internationalJob = filteredData.filter(job => job.job_type === "International")
    const remoteJob = filteredData.filter(job => job.job_type === "Work From Home")
   
    console.log(filteredData)
    const handleItem = (data)=>{
        setItem(data)
    }
    return(
        <>
        <Navbar/>
        <SearchBar/>
<br/>  
   <div style = {{float:"left"}}>   
<Grid container spacing={50}>
    <Grid item sm={3} md={3} lg={7}>



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
        </div>
        </div>
        </Grid>
           <Grid item lg={4}>
                    <div>

             {contract === "all" && filteredData.map(datas=>(
                <div onClick = {()=>handleItem(datas)}>  <FilteredCard data={datas} /></div>

            ))}
            
            {contract === "fullTime" && permanentJob.map(job => {
                return <div onClick = {()=>handleItem(job)}>  <FilteredCard data={job} /></div>
            })}

            {contract === "contract" && internationalJob.map(job => {
                return <div onClick = {()=>handleItem(job)}>  <FilteredCard data={job} /></div>
            })}

            {contract === "remotePartTime" && remoteJob.map(job => {
                return <div onClick = {()=>handleItem(job)}>  <FilteredCard data={job} /></div>
            })}

            {contract === "temporary"  && <h1>Jobs not available..</h1>}
            {contract === "internship"  && <h1>Jobs not available..</h1>}
            {contract === "partTime"  && <h1>Jobs not available..</h1>}
            {contract === "flexible"  && <h1>Jobs not available..</h1>}


            </div>
</Grid>

</Grid>
</div>
        <Grid>
        <div className = {styles.card}>
            <div>
               <JobCardInfo item = {item}/> 
            </div>
            
        </div>
        </Grid>
        </>
    )
}

export default SearchResults