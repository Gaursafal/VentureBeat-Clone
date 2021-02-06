import { useState, useEffect } from "react"
import React from 'react'
import styles from '../Css/Posts.module.css'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import {useSelector, useDispatch} from 'react-redux'
import { getPosts } from "../Redux/PostsRedux/actionCreator";
import { useHistory } from "react-router-dom";
// import {getPosts} from '../Redux/actionCreator'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop:"50px"
    },
   
    footer : {
        marginTop:"10px",
        marginLeft:"20px"
    },
    
    date:{
        marginLeft:"20px"
    }
  }))

const Posts = () => {
    const dispatch = useDispatch()
    const history = useHistory()
   
    const [fetchedData, setFetchedData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts)
        .then(res => setFetchedData(res.payload.data))     
    },[])
     
    const postsData = useSelector(state => state.post.posts) 
    const handleClick =(id)=>{
        history.push(`/ai/${id}`)
    }
    return(

        <div>
           
            <Container fixed >
                {fetchedData && fetchedData.map(post => {
                    return (
                        <div onClick = {()=>handleClick(post.id)}>
                        <Grid container  className = {classes.root}>
                    <Grid  item xs = {12} md = {5} lg = {4} className = {styles.image} >
                        <img   src = {post.image} alt = "image"/>
                    </Grid>

                    <Grid  item xs = {12}   md = {6} >
                       <Typography variant = "h4" className = {styles.title} >{post.title}</Typography>
                       <Grid container className = {classes.footer} xs = {12}>
                       <Grid  item >
                           <Typography className = {styles.author}>{post.author}</Typography>
                       </Grid>
                       <Grid item >
                          <Typography className = {styles.date}>{post.date} </Typography>
                       </Grid>
                    </Grid>
                   
                    </Grid>
                </Grid></div>

                    )
                })}
                
                
            </Container>

        </div>
    )
}
export default Posts