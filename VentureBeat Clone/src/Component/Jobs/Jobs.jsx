import { React, useState, useEffect } from "react"
import { styled, TextField, Grid, Button, Link } from "@material-ui/core"
import Styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import GroupIcon from '@material-ui/icons/Group';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import styles from "./Jobs.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getJobsData } from "../../redux/JobsRedux/actionCreate.js"


const Heading = Styled.div`
margin-top:50px;
text-align:center;
font-size:40px;
padding:10px;
color:white;
margin-bottom : 40px;
`

const Submit = Styled.input`
background-color:red;
width:100%;
border:hidden;
padding:2px;
color:white;
border-radius:5px;
`
const SearchBox = Styled.div`
    margin-top:50px;
    background-color:white;
    padding:40px;    
    width:70%;
    border:1px solid black;
    margin-left:auto;
    margin-right:auto;
    justify-Content:center; 
    border-radius : 10px;
    border : none;  
`



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    input: {
        width: "100%",
    },
    typo: {
        color: "white",
        textAlign: "center"
    },
    jobs: {
        width: 130,
        padding: 5,
        marginLeft: 80
    },
    card: {
        maxWidth: 500,
        width: 370,
        marginRight: 50
    },
    media: {
        height: 200,
    },
}));


function PageHead() {
    const classes = useStyles();
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const jobsData = useSelector(state => state.jobs.jobsData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getJobsData())
    }, [])


    const handleSearch = (e) => {
        e.preventDefault()
        const filteredData = jobsData.filter(el => el.profile_name === title && el.location === location)
        console.log(filteredData)
    }
    console.log(title, location)
    console.log(jobsData)
    return (
        <>
            <div className={classes.root} className={styles.backgroundImg}>
                <br />
                <Heading>VentureBeat Careers</Heading>
                <Typography variant="h6" className={classes.typo}> Discover your next move </Typography>
                <SearchBox>
                    <form >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={5} lg={5}>
                                <TextField className={classes.input} id="filled-basic" label="Filled" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Grid>


                            <Grid item xs={12} sm={12} lg={4} md={4}>
                                <TextField className={classes.input} id="filled-basic" label="Search Location" variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={12} lg={3} md={3}>
                                <Button onClick={handleSearch} style={{ height: "55px" }} className={classes.input} variant="contained" color="secondary">
                                    SEARCH
                                 </Button>
                            </Grid>

                        </Grid>
                    </form>
                </SearchBox>
            </div>
            <div>
                <Typography variant="h3" color="textSecondary" className={styles.typo1}>Featured Companies</Typography>
                <Typography variant="h6" color="textSecondary" className={styles.typo1}>Browse through our featured companies of the week</Typography>
            </div>
            <div className={styles.airbnb}>
                <img className={styles.airbnbImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/airbnb-2-logo-1584358205113.gif" alt="airbnb" />
                <Typography variant="h3" className={styles.airbnbText}>Airbnb</Typography>
                <Typography variant="h6" className={styles.airbnbText}>London, United Kingdom</Typography>
                <Button className={classes.jobs} variant="contained" color="secondary">View 60 Jobs</Button>
            </div>

{/* Card 1 Start */}
            <div className={styles.cardClass}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/spotify-content-1587552188803.jpg"
                            title="Contemplative Reptile"
                        />
                        <div>
                            <img className={styles.cardImg} src="https://neuvoo.com/img/logos/spotify.png?empname=Spotify" alt="spotify" />
                            <Typography variant="h6" style={{ textAlign: "center" }}>Spotify</Typography>
                        </div>
                        <CardContent>
                            <Typography variant="h7" color="textSecondary" className={styles.cardContent}>
                                <LocalOfferIcon style={{ width: "13px" }} />  Music <br />
                                <LocationOnIcon style={{ width: "15px" }} /> Worldwide <br />
                                < GroupIcon style={{ width: "15px" }} /> 1001-5000 employees <br />
                                <StarIcon style={{ width: "15px" }} /> Diversity is nothing without inclusion <br />
                                <ThumbUpAltIcon style={{ width: "15px" }} /> A Purpose-Driven Company
                              </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={styles.btn} variant="contained" color="primary">
                            View Compamany
                          </Button>
                    </CardActions>
                </Card>


                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/lockheed-martin-content-1603354746732.jpg"
                            title="Contemplative Reptile"
                        />
                        <div>
                            <img className={styles.cardImg} src="https://neuvoo.com/img/logos/appcast-cpc.png?empname=Lockheed%20Martin" alt="spotify" />
                            <Typography variant="h6" style={{ textAlign: "center" }}>Lockheed Martin</Typography>
                        </div>
                        <CardContent>
                            <Typography variant="h7" color="textSecondary" className={styles.cardContent}>
                                <LocalOfferIcon style={{ width: "13px" }} />  Defence and Space <br />
                                <LocationOnIcon style={{ width: "15px" }} /> Maryland, USA <br />
                                < GroupIcon style={{ width: "15px" }} /> 10,001 + <br />
                                <StarIcon style={{ width: "15px" }} /> Competitive Compensation and Benefits <br />
                                <ThumbUpAltIcon style={{ width: "15px" }} /> Engineering a better tomorrow
                              </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={styles.btn} variant="contained" color="secondary">
                            View Compamany
                          </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/ceridian-content-1589470455263.jpg"
                            title="Contemplative Reptile"
                        />
                        <div>
                            <img className={styles.cardImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/ceridian-logo-1584530158844.jpg" alt="spotify" />
                            <Typography variant="h6" style={{ textAlign: "center" }}>Ceridian</Typography>
                        </div>
                        <CardContent>
                            <Typography variant="h7" color="textSecondary" className={styles.cardContent}>
                                <LocalOfferIcon style={{ width: "13px" }} />  Consulting Tech <br />
                                <LocationOnIcon style={{ width: "15px" }} /> Canada | Global<br />
                                < GroupIcon style={{ width: "15px" }} /> 1001-5000 employees <br />
                                <StarIcon style={{ width: "15px" }} /> Makes Work Life Better <br />
                                <ThumbUpAltIcon style={{ width: "15px" }} /> Career growth & mobility
                              </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={styles.btn} variant="contained" color="primary">
                            View 11 Jobs
                          </Button>
                    </CardActions>
                </Card>
            </div>
{/* Card 1 End */}


{/* Card 2 Start */}
            <div className={styles.cardClass}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/spotify-content-1587552188803.jpg"
                            title="Contemplative Reptile"
                        />
                        <div>
                            <img className={styles.cardImg} src="https://neuvoo.com/img/logos/spotify.png?empname=Spotify" alt="spotify" />
                            <Typography variant="h6" style={{ textAlign: "center" }}>Spotify</Typography>
                        </div>
                        <CardContent>
                            <Typography variant="h7" color="textSecondary" className={styles.cardContent}>
                                <LocalOfferIcon style={{ width: "13px" }} />  Music <br />
                                <LocationOnIcon style={{ width: "15px" }} /> Worldwide <br />
                                < GroupIcon style={{ width: "15px" }} /> 1001-5000 employees <br />
                                <StarIcon style={{ width: "15px" }} /> Diversity is nothing without inclusion <br />
                                <ThumbUpAltIcon style={{ width: "15px" }} /> A Purpose-Driven Company
                              </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={styles.btn} variant="contained" color="primary">
                            View Compamany
                          </Button>
                    </CardActions>
                </Card>


                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/lockheed-martin-content-1603354746732.jpg"
                            title="Contemplative Reptile"
                        />
                        <div>
                            <img className={styles.cardImg} src="https://neuvoo.com/img/logos/appcast-cpc.png?empname=Lockheed%20Martin" alt="spotify" />
                            <Typography variant="h6" style={{ textAlign: "center" }}>Lockheed Martin</Typography>
                        </div>
                        <CardContent>
                            <Typography variant="h7" color="textSecondary" className={styles.cardContent}>
                                <LocalOfferIcon style={{ width: "13px" }} />  Defence and Space <br />
                                <LocationOnIcon style={{ width: "15px" }} /> Maryland, USA <br />
                                < GroupIcon style={{ width: "15px" }} /> 10,001 + <br />
                                <StarIcon style={{ width: "15px" }} /> Competitive Compensation and Benefits <br />
                                <ThumbUpAltIcon style={{ width: "15px" }} /> Engineering a better tomorrow
                              </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={styles.btn} variant="contained" color="secondary">
                            View Compamany
                          </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/ceridian-content-1589470455263.jpg"
                            title="Contemplative Reptile"
                        />
                        <div>
                            <img className={styles.cardImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/ceridian-logo-1584530158844.jpg" alt="spotify" />
                            <Typography variant="h6" style={{ textAlign: "center" }}>Ceridian</Typography>
                        </div>
                        <CardContent>
                            <Typography variant="h7" color="textSecondary" className={styles.cardContent}>
                                <LocalOfferIcon style={{ width: "13px" }} />  Consulting Tech <br />
                                <LocationOnIcon style={{ width: "15px" }} /> Canada | Global<br />
                                < GroupIcon style={{ width: "15px" }} /> 1001-5000 employees <br />
                                <StarIcon style={{ width: "15px" }} /> Makes Work Life Better <br />
                                <ThumbUpAltIcon style={{ width: "15px" }} /> Career growth & mobility
                              </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={styles.btn} variant="contained" color="primary">
                            View 11 Jobs
                          </Button>
                    </CardActions>
                </Card>
            </div>
{/* Card 2 End */}


            <div style={{ display: "flex", flexDirection: "row", marginLeft: "150px", marginRight: "50px", marginTop: "150px" }}>
{/* Companies Start */}
                <div>
                    <Typography variant="h6" color="initial">Companies</Typography>
                    <div className={styles.companies}>
                        <img className={styles.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/heineken-logo-1612351275607.png" alt="heins" />
                        <div className={styles.jobs}>
                            <Typography variant="body2">Heineken</Typography>
                            <Typography variant="body2">2432 Jobs</Typography>
                        </div>
                    </div>
                    <div className={styles.companies}>
                        <img className={styles.jobsImg} src="https://neuvoo.com/img/logos/reynolds-and-reynolds.png?empname=Reynolds%20&%20Reynolds" alt="heins" />
                        <div className={styles.jobs}>
                            <Typography variant="body2">Reynolds & Reynolds</Typography>
                            <Typography variant="body2">View Channel</Typography>
                        </div>
                    </div>
                    <div className={styles.viewMore}>
                        <Button color="secondary">View more</Button>
                    </div>
                </div>
{/* Companies End */}


{/* Jobs Feed Start */}
                <div>
                    <Typography variant="h6" color="initial">Job Feed</Typography>
                    <div className={styles.jobsFeed}>
                        <img className={styles.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/johnson-controls-logo-1612350900919.png" alt="heins" />
                        <div className={styles.jobs}>
                            <Typography variant="h6">Development Chemist II</Typography>
                            <Typography variant="body2" style={{ "wordSpacing": "20px" }}>Johnson-Controls  Not-Disclosed   Marinette</Typography>
                        </div>
                    </div>

                    <div className={styles.jobsFeed}>
                        <img className={styles.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/johnson-controls-logo-1612350900919.png" alt="heins" />
                        <div className={styles.jobs}>
                            <Typography variant="h6">Development Chemist II</Typography>
                            <Typography variant="body2" style={{ "wordSpacing": "20px" }}>Johnson-Controls  Not-Disclosed   Marinette</Typography>
                        </div>
                    </div>

                    <div className={styles.jobsFeed}>
                        <img className={styles.jobsImg} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/johnson-controls-logo-1612350900919.png" alt="heins" />
                        <div className={styles.jobs}>
                            <Typography variant="h6">Development Chemist II</Typography>
                            <Typography variant="body2" style={{ "wordSpacing": "20px" }}>Johnson-Controls  Not-Disclosed   Marinette</Typography>
                        </div>
                    </div>
                </div>

{/* Jobs Feed End */}


{/* VB Card Start */}
                <div className={styles.vb}>
                    <div>
                        <img style={{ borderRadius: "50px", marginLeft: "100px" }} src="https://dy793rr2xtptx.cloudfront.net/images2/topic/new/venturebeat-logo-1552659737963.jpg" alt="vb" />
                        <div className={styles.vbCard}>
                            <Typography variant="h6" color="textPrimary">Venture Beat Jobs</Typography>
                            <Typography variant="h6">Board</Typography>
                            <Typography variant="body3">Reach the tech sector</Typography>
                            <div className={styles.alertBtn}>
                                <Button variant="contained" color="secondary" className={styles.alertBtn}>Subscribe To Alerts</Button>
                            </div>
                            <Button variant="contained" color="inherit">Advertise Now</Button>
                        </div>
                    </div>
                </div>
{/* VB Card End */}
            </div>

{/* Footer Start */}
            <div className={styles.footerBlock}>
                <div className={styles.about}>
                    <Button className={styles.about} style={{ color: "whitesmoke" }}>About</Button><br></br>
                    <Button className={styles.about} style={{ color: "whitesmoke" }}>Pricing</Button>
                </div>
                <div>
                    <Typography>
                        VentureBeat and Jobbio have joined forces to create a digital careers marketplace <br />
                        targeting VentureBeat's 12 million monthly readers.
                        </Typography>
                    <br />
                    <br />
                    <Typography>
                        For companies, it means access to an incredible audience of engaged passive and<br />
                        active candidates and is part of Jobbio’s ongoing strategy to reach high quality <br />
                        candidates through exclusive media partnerships. It is powered by Jobbio’s <br />
                        innovative channel technology which allows job seekers to apply for open roles using <br />
                        new or existing Jobbio profiles.
                        </Typography>
                </div>
            </div>
{/* footer End */}


{/* footer Card Start */}
            <div className={styles.cardClass}>
                <Card className={classes.card}>
                    <div className = {styles.footercard}>
                    <Typography variant="h6">Single Job Posting</Typography>
                    </div>
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" className={styles.cardContent}>
                            Advertise 1 roles for 30 days to ensure <br />
                             they're seen by over 12 million visitors a <br />
                              month from across the world.
                        </Typography>
                        <br/>
                        <br/>
                        <br/>
                    </CardContent>
                    <Button className={styles.btn} variant="contained" color="secondary"> Post a Job $499</Button>
                </Card>

                <Card className={classes.card}>
                    <div className = {styles.footercard}>
                    <Typography variant="h6">Unlimited Job Postings</Typography>
                    </div>
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" className={styles.cardContent}>
                        Post unlimited jobs and let our <br />
                        technology match your roles to the <br />
                        Jobbio talent base & VentureBeat's<br/>
                        engaged audience of developers, tech<br/>
                        enthusiasts, and business leaders.
                        </Typography>
                        <br/>
                    </CardContent>
                    <Button className={styles.btn} variant="contained" color="secondary"> Advertise now for $599 </Button>
                </Card>


                <Card className={classes.card}>
                <div className = {styles.footercard}>
                    <Typography variant="h6">Premium Job Posting</Typography>
                    </div>
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" className={styles.cardContent}>
                        Post unlimited jobs and let our <br />
                        technology match your roles to the <br />
                        Jobbio talent base & VentureBeat's<br/>
                        engaged audience of developers, tech<br/>
                        enthusiasts, and business leaders.
                        </Typography>
                        <br/>
                    </CardContent>
                    <Button className={styles.btn} variant="contained" color="secondary">Request a calllback</Button>
                </Card>
            </div>
{/* footer Card End */}


{/* footer Text Start */}
   <div className  = {styles.footerText}>
       <Typography variant = "h4" color="textSecondary">Get Your Job Out There</Typography><br/>
       <Typography variant = "h6" color="textSecondary">Post your job in our dedicated careers sections for 30 days.</Typography><br/>
       <Button variant="contained" color="secondary">Add My Job</Button>
   </div>
{/* footer Text End */}

    <div className ={styles.footerEnd}>
                <Typography>© 2021 Jobbio</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Cookie Policy</Typography>
                <Typography>Use Policy</Typography>
                <Typography>Terms & Condition</Typography>
    </div>

        </>
    )
}
export default PageHead