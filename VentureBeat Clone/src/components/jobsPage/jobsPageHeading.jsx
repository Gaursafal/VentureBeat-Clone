import React from "react"
import {styled, TextField,Grid,Button} from "@material-ui/core"
import Styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';

const Heading=Styled.div`
margin-top:50px;
text-align:center;
font-size:25px;
padding:10px;
color:white;
`

const Submit =Styled.input`
background-color:red;
width:100%;
border:hidden;
padding:2px;
color:white;
border-radius:5px;

`
const SearchBox=Styled.div`
    margin-top:100px;
    background-color:white;
    padding:20px;    
    width:70%;
    border:1px solid black;
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
  
 
  
}));


function PageHead (){
    const classes = useStyles();
    return(
    <>
    <div style={{background:"url("+"https://dy793rr2xtptx.cloudfront.net/images2/topic/new/venturebeat-banner-1552689220310.jpg"+") " ,backgroundRepeat:"no-repeat", height:"400px"}} className={classes.root}>
        <br/>
        <Heading>VentureBeat Careers</Heading>
        <SearchBox>
        <form action="">
        <Grid container spacing={1}>


            <Grid item xs={12} sm={12} md={5} lg={5}>

             <TextField  className={classes.input} id="filled-basic" label="Filled" variant="outlined" />
            </Grid>


            <Grid item xs={12} sm={12} lg={4} md={4}>
            <TextField className={classes.input} id="filled-basic" label="Search Location" variant="outlined" />
            </Grid>
       <Grid item xs={12} sm={12} lg={3} md={3}>
       <Button style={{height:"55px"}} className={classes.input} variant="contained" color="secondary">
             SEARCH
        </Button>
       </Grid>

</Grid>
        </form>
        </SearchBox>
    </div>
    
    </>
    )
}

export default PageHead

//https://dy793rr2xtptx.cloudfront.net/images2/topic/new/venturebeat-banner-1552689220310.jpg