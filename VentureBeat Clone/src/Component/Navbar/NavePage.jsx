import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingRight: 25,
        paddingLeft: 35,
        color : "white"
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
        marginRight : 35,
        marginLeft  : 100
        
    },
    rightCon : {
        display : "flex",
        flexDirection : "column",
    },
}));

export default function Navpage() {
    const classes = useStyles();
    return (
        <div>
            
            <div className={classes.root}>
                <div className={classes.container} style={{ backgroundColor: "#1a237e" }}>
                    <div><Navbar/></div>
                    <div className = {classes.div}>
                        <div className = {classes.amazon}>
                            <img width="800px" height = "500px" src="https://venturebeat.com/wp-content/uploads/2020/12/dropbox.jpg?resize=700%2C350&strip=all" alt="amazon" />
                            <h1>Dozens of current and former Dropbox <br/> employees allege gender discrimination</h1>
                        </div>
                        <div className = {classes.rightCon}>
                        <div>
                            <img  width = "400px" src="https://venturebeat.com/wp-content/uploads/2021/02/Jared-Spataro-e1612526196407.jpg?resize=700%2C350&strip=all" alt="play" />
                            <h2>Microsoft launches Viva, an AI-powered <br/> information hub for enterprises</h2>
                        </div>
                        <div>
                            <img  width = "400px" src="https://venturebeat.com/wp-content/uploads/2019/05/Google-Lens-translation.png?resize=350%2C175&strip=all" alt="play" />
                            <h2>Databricks raises $1 billion funding <br/> round at $28 billion valuation</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}