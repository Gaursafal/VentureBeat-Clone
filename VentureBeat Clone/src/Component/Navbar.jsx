import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import AppIcon from '@material-ui/core/AppIcon';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import styles from '../Css/Navbar.module.css'
import logo from './logo.ico'


export default function Navbar() {
 
    const isAuth=useSelector(state=>state.google.isAuth)
    console.log(isAuth)
    return (
        <div >
         
                <Container className={styles.navbar}>
                   
                        <div className = {styles.logo}>
                        <Link to="/"><img width = "200px" src = {logo}/> </Link>
                        </div>
                        <div className = {styles.links}>
                      <Link to="/machin">  <Typography variant="h6" color = "inherit" > The Machine </Typography></Link>
                      <Link to="/games"> <Typography variant="h6" color = "inherit" > GamesBeat </Typography></Link>
                      <Link to= "/jobs"> <Typography variant="h6" color = "inherit" > Jobs </Typography></Link>
                      <Link to = "/issues"> <Typography variant="h6" color = "inherit" > Special Issue </Typography></Link>
                        </div>
                        <div className = {styles.member}>
                      <Link to="/member"> <Typography variant="h6" color = "inherit"  > Become a Member |</Typography></Link>
                      <Link> <Typography variant="h6" color = "inherit" > {!isAuth?"Sign in":"Sign out"} </Typography></Link>
                        </div>
                        
                </Container>

                <Container className = {styles.navIcon}>
                <IconButton color = "inherit">
                        <SearchIcon/>
                    </IconButton>
                    
                   <IconButton color = "inherit">
                       <MenuIcon />
                   </IconButton>
                  
                  
                </Container>
           
        </div>
    );
}