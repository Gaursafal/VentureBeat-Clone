
import {React,useState,useEffect} from "react"
import {styled, TextField,Grid,Button} from "@material-ui/core"
import Styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom"

import styles from "../Css/jobsPage.module.css"
import {useDispatch,useSelector} from "react-redux"
import { getJobsData,jobsDataFiltered } from "../Redux/JobsRedux/actionCreate";
const SearchBox=Styled.div`
    margin-top:100px;
    background-color:white;
    padding:20px;    
    width:70%;
   
    margin-left:auto;
    margin-right:auto;
    justify-Content:center;   
`



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },    
  input:{
    width:"100%",
    
  }
}))
  
 
function SearchBar (){
    const classes = useStyles();
    const [title,setTitle]=useState("")
    const [location,setLocation]=useState("")
    const jobsData=useSelector(state=>state.jobs.jobsData)
    const dispatch = useDispatch()
    
    const history=useHistory()
      useEffect(()=>{
      dispatch(getJobsData())
    },[])
   
   
    const handleSearch=(e)=>{
        e.preventDefault()
        //data filtering
        const filteredData=jobsData.filter(el=>el.profile_name === title || el.location === location)
        dispatch(jobsDataFiltered(filteredData))
    }

   
    return(
    <SearchBox>
        <form >
        <Grid container spacing={2}>


            <Grid item xs={12} sm={12} md={5} lg={5}>

             <TextField  className={classes.input} id="filled-basic" label="Filled" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </Grid>


            <Grid item xs={12} sm={12} lg={4} md={4}>
            <TextField className={classes.input} id="filled-basic" label="Search Location" variant="outlined" value={location} onChange={(e)=>setLocation(e.target.value)} />
            </Grid>
       <Grid item xs={12} sm={12} lg={3} md={3}>
       <Button onClick={handleSearch} style={{height:"55px"}} className={classes.input} variant="contained" color="secondary">
             SEARCH
        </Button>
       </Grid>

        </Grid>
        </form>
        </SearchBox>
        )
}

export default SearchBar