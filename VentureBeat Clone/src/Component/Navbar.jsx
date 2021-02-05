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
        paddingRight: 50,
        paddingLeft: 70
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    typo: {
       // marginRight: 20,
        padding:10,
        textDecoration : "none"
    },
    typo1: {
        marginLeft: 75,
        textDecoration : "none"
    },
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
                       <Link to="/"> <img width="200px" color = "inherit" className={classes.typo} src="data:image/png;base64,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" alt="logo" /></Link>
                      <Link to="/machin">  <Typography variant="h6" color = "inherit"  className={classes.typo}> The Machine </Typography></Link>
                      <Link to="/games"> <Typography variant="h6" color = "inherit"  className={classes.typo}> GamesBeat </Typography></Link>
                      <Link to= "/jobs"> <Typography variant="h6" color = "inherit"  className={classes.typo}> Jobs </Typography></Link>
                      <Link to = "/issues"> <Typography variant="h6" color = "inherit"  className={classes.typo}> Special Issue </Typography></Link>
                      <Link to="/member"> <Typography variant="h6" color = "inherit"  className={classes.typo1}> Become a Member |</Typography></Link>
                      <Link> <Typography variant="h6" color = "inherit"  className={classes.typo}> {!isAuth?"Sign in":"Sign out"} </Typography></Link>
                        <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </div>
        </div>
    );
}