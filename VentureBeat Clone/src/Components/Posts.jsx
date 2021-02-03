import { useState, useEffect } from "react"
import React from 'react'
import styles from './Posts.module.css'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import {useSelector, useDispatch} from 'react-redux'
import {getPosts} from '../Redux/actionCreator'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop:"30px"
    },
    title: {
        color:"rgb(77, 77, 79)",
        fontSize:"30px",
        // fontFamily:"Roboto, sans-serif",
        fontWeight:"700",
        textAlign:"left",
        lineHeight:"34px",
        cursor:"pointer",
        textAlign:"left"   
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
   
   
    const [fetchedData, setFetchedData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts)
        .then(res => setFetchedData(res.payload.data))     
    },[])
     
    const postsData = useSelector(state => state.posts) 
    return(

        <div>
            <h1>Posts in homepage</h1>
           
            <Container fixed >
                {fetchedData && fetchedData.map(post => {
                    return (
                        <Grid container className = {classes.root}>
                    <Grid  item xs = {12} md = {5} lg = {4} className = {styles.image}>
                        <img   src = {post.image} alt = "image"/>
                    </Grid>

                    <Grid  item xs = {12}   md = {6} >
                       <Typography variant = "h4" className = {styles.title}>{post.title}</Typography>
                       <Grid container className = {classes.footer} xs = {12}>
                       <Grid className = {styles.author} item >
                           <Typography>{post.author}</Typography>
                       </Grid>
                       <Grid item className = {styles.date}>
                          <Typography>{post.date} </Typography>
                       </Grid>
                    </Grid>
                   
                    </Grid>
                </Grid>

                    )
                })}
                
                
            </Container>

        </div>
    )
}
export default Posts