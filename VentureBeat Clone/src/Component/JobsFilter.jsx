import React, {useState, useEffect} from 'react'
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


const useStyles = makeStyles({
    root: {
      maxWidth: 325,
      margin:"30px",
      display:"flex",
      flexDirection:"column",
      alignItems:"left",
      background:"rgb(250,250,250)",
      fontSize:"12px",
      color:"rgb(37, 37, 37)",
      fontWeight:"400"
    }

  });
  

function JobsFilter() {
const classes = useStyles();
const [date, setDate] = useState('')
const [contract, setContract] = useState('')

console.log(contract)
console.log(date)


    return (
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
        <Card className={classes.root}>
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
    )
}
export default JobsFilter