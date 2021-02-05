import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
const useStyles = makeStyles((theme) => ({
    container: {
        width : "100%",
        paddingLeft: 120
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color : "white"
    },
    typo: {
       // marginRight: 20,
        padding:10,
        textDecoration : "none",
        color : "white"
    },
    typo1: {
        marginLeft: 90,
        textDecoration : "none",
        color : "white"
    },
    logo : {
        display : "flex",
        flexDirection : "row",
        textDecoration : "none"

    }
}));

export default function Navbar() {
    const classes = useStyles();
    const isAuth=useSelector(state=>state.google.isAuth)
    console.log(isAuth)
    return (
        <div>
            <div className={classes.root}>
                <Container className={classes.container} >
                    <Toolbar variant="dense">
                    <Link to="/" className = {classes.logo}>
                         <Typography variant = "h4" style = {{color : "white"}}>Venture</Typography>
                         <Typography variant = "h4" color = "secondary">Beat</Typography>
                        </Link>
                      <Link to="/machine" style = {{textDecoration : "none"}}>  <Typography variant="h6" color = "inherit"  className={classes.typo}> The Machine </Typography></Link>
                      <Link to="/games" style = {{textDecoration : "none"}}> <Typography variant="h6" color = "inherit"  className={classes.typo}> GamesBeat </Typography></Link>
                      <Link to= "/jobs" style = {{textDecoration : "none"}}> <Typography variant="h6" color = "inherit"  className={classes.typo}> Jobs </Typography></Link>
                      <Link to = "/issues" style = {{textDecoration : "none"}}> <Typography variant="h6" color = "inherit"  className={classes.typo}> Special Issue </Typography></Link>
                      <Link to="/member" style = {{textDecoration : "none"}}> <Typography variant="h6" color = "inherit"  className={classes.typo1}> Become a Member |</Typography></Link>
                      <Link to="/signin" style = {{textDecoration : "none"}}> <Typography variant="h6" color = "inherit"  className={classes.typo}> {!isAuth?"Sign in":"Sign out"} </Typography></Link>
                        <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </div>
        </div>
    );
}