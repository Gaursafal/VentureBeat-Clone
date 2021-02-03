import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    container: {
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
        marginRight: 40
    },
    typo1: {
        marginLeft: 150
    },
    div :{
        display : "flex",
        flexDirection : "row",
        marginTop : 30,
    },
    amazon : {
        marginRight : 50,
    },
    rightCon : {
        display : "flex",
        flexDirection : "column"
    },
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar className={classes.container} style={{ backgroundColor: "#1a237e" }}>
                    <Toolbar variant="dense">
                        <img width="200px" className={classes.typo} src="/logo.png" alt="logo" />
                        <Typography variant="h6" color="inherit" className={classes.typo}> The Machine </Typography>
                        <Typography variant="h6" color="inherit" className={classes.typo}> GamesBeat </Typography>
                        <Typography variant="h6" color="inherit" className={classes.typo}> Jobs </Typography>
                        <Typography variant="h6" color="inherit" className={classes.typo}> Special Issue </Typography>
                        <Typography variant="h6" color="inherit" className={classes.typo1}> Become a Member |</Typography>
                        <Typography variant="h6" color="inherit" className={classes.typo}> Sign in </Typography>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <div className = {classes.div}>
                        <div className = {classes.amazon}>
                            <img width="800px" height = "500px" src="/amazon.jpg" alt="amazon" />
                            <h1>Jeff Bezos announces plan to  step <br /> down as CEO, as Amazon's Q4 <br /> revenue eclipses $100 billion</h1>
                        </div>
                        <div className = {classes.rightCon}>
                        <div>
                            <img  width = "450px" src="/play-4.jpg" alt="play" />
                            <h1>Playstudios will go public via <br/> SPAC at $1.1 billion valuation</h1>
                        </div>
                        <div>
                            <img  width = "450px" src="/databricks.png" alt="play" />
                            <h1>Databricks raises $1 billion <br/> funding round at $28 billion <br/> valuation</h1>
                        </div>
                        </div>
                    </div>
                </AppBar>
            </div>
        </div>
    );
}