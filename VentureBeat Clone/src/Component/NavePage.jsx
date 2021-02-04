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
        marginRight : 15,
        
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
                <Container className={classes.container} style={{ backgroundColor: "#1a237e" }}>
                    <div><Navbar/></div>
                    <div className = {classes.div}>
                        <div className = {classes.amazon}>
                            <img width="800px" height = "500px" src="https://venturebeat.com/wp-content/uploads/2019/12/amazon-logo-reuters.jpg?resize=700%2C350&strip=all" alt="amazon" />
                            <h1>Jeff Bezos announces plan to  step <br /> down as CEO, as Amazon's Q4 <br /> revenue eclipses $100 billion</h1>
                        </div>
                        <div className = {classes.rightCon}>
                        <div>
                            <img  width = "400px" src="https://venturebeat.com/wp-content/uploads/2021/02/graphql-feature.png?resize=700%2C350&strip=all" alt="play" />
                            <h2>Playstudios will go public via <br/> SPAC at $1.1 billion valuation</h2>
                        </div>
                        <div>
                            <img  width = "400px" src="https://venturebeat.com/wp-content/uploads/2019/05/Google-Lens-translation.png?resize=350%2C175&strip=all" alt="play" />
                            <h2>Databricks raises $1 billion <br/> funding round at $28 billion <br/> valuation</h2>
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}