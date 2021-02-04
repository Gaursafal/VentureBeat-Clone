import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingRight: 50,
        paddingLeft: 70
    },
    root: {
        flexGrow: 1,
    },
    div :{
        display : "flex",
        flexDirection : "row",
        marginTop : 30,
        marginLeft : 30
    },
    amazon : {
        marginRight : 50,
        
    },
    rightCon : {
        display : "flex",
        flexDirection : "column"
    },
}));

export default function Navpage() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar className={classes.container} style={{ backgroundColor: "#1a237e" }}>
                    <div className = {classes.div}>
                        <div className = {classes.amazon}>
                            <img width="800px" height = "500px" src="/amazon.jpg" alt="amazon" />
                            <h1>Jeff Bezos announces plan to  step <br /> down as CEO, as Amazon's Q4 <br /> revenue eclipses $100 billion</h1>
                        </div>
                        <div className = {classes.rightCon}>
                        <div>
                            <img  width = "450px" src="/play-4.jpg" alt="play" />
                            <h2>Playstudios will go public via <br/> SPAC at $1.1 billion valuation</h2>
                        </div>
                        <div>
                            <img  width = "450px" src="/databricks.png" alt="play" />
                            <h2>Databricks raises $1 billion <br/> funding round at $28 billion <br/> valuation</h2>
                        </div>
                        </div>
                    </div>
                </AppBar>
            </div>
        </div>
    );
}