import {React} from "react"
import {styled, TextField,Grid,Button,Link} from "@material-ui/core"
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
import styles from "../Css/jobsPage.module.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles((theme) => ({
   root:{flexGrow:1},
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
        
        width: "auto",
        padding:10,
        marginTop:20
    },
    media: {
        height: 200,
    },
}));

function JobsCard (){
    const classes = useStyles();
    return(

        <>
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
    
<Grid container spacing={1}>


<Grid item xs={12} sm={12} md={6} lg={4}>
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
</Grid>
<Grid item xs={12} sm={12} md={6} lg={4}>
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
</Grid>
<Grid item xs={12} sm={12} md={6} lg={4}>
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
    </Grid>


{/* Card 1 End */}


{/* Card 2 Start */}
<Grid item xs={12} sm={12} md={6} lg={4}>
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
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={4}>
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
</Grid>
<Grid item xs={12} sm={12} md={6} lg={4}>
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
    </Grid>
    </Grid>
  
</div>
{/* Card 2 End */}


<div className={styles.boxs} >

{/* Companies Start */}
    <div className={styles.hide}>
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
<div className={styles.jobsBox}>
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
    </div>

{/* Jobs Feed End */}


{/* VB Card Start */}
<div className={styles.hide}>
  
    <div className={styles.vb} >
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
  
    </div>
{/* VB Card End */}
</div>

{/* Footer Start */}
<div className={styles.footerBlock}>
   <Grid container spacing={1}>
    <Grid item sm={12} md={12} lg={3} >
    <div className={styles.about}>
        <Button className={styles.about} style={{ color: "whitesmoke" }}>About</Button><br></br>
        <Button className={styles.about} style={{ color: "whitesmoke" }}>Pricing</Button>
    </div>
    </Grid>
 
    <Grid item  sm={12} md={12} lg={8}>

    <div className={styles.spaces}>
    
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
    
   </Grid>
   </Grid>   
</div>
{/* footer End */}


{/* footer Card Start */}
<div className={styles.cardClass} >
 <Grid contianer spacing={0}>    
 <Grid item sm={12} md={6} lg={3} >
    <div>

  
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
    </div>
    </Grid>
  
    <Grid item sm={12} md={6} lg={3}>
<div>

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
    
    </div>
</Grid>
   

<Grid item sm={12} md={6} lg={3}>
<div>
 
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
    </Grid>
    </Grid>
</div>
{/* footer Card End */}


{/* footer Text Start */}
<div className  = {styles.footerText}>
<Typography variant = "h4" color="textSecondary">Get Your Job Out There</Typography><br/>
<Typography variant = "h6" color="textSecondary">Post your job in our dedicated careers sections for 30 days.</Typography><br/>
<Button variant="contained" color="secondary">Add My Job</Button>
</div>
{/* footer Text End */}

{/* Footer Start */}
<div className ={styles.footerEnd}>
                <div className = {styles.text}>
                <Typography variant = "body2">© 2021 Jobbio</Typography>
                </div>
                <div className = {styles.text}>
                <Typography variant = "body2"><Link style={{color:"white",textDecoration:"none"}}>Privacy Policy</Link></Typography>
                </div>
                <div className = {styles.text}>
                <Typography variant = "body2"><Link style={{color:"white",textDecoration:"none"}}>Cookie Policy</Link></Typography>
                </div>
                <div className = {styles.text}>
                <Typography variant = "body2"><Link style={{color:"white",textDecoration:"none"}}>Use Policy</Link></Typography>
                </div>
                <div className = {styles.text}>
                <Typography variant = "body2"><Link style={{color:"white",textDecoration:"none"}}>Terms & Conditions</Link></Typography>
                </div>


                <div>
                <div className = {styles.icon}>
                        <Link to="/https://twitter.com/venturebeat">
                            <FacebookIcon className = {styles.linkIcon} />
                        </Link>
                        <Link to="/https://twitter.com/venturebeat">
                            <TwitterIcon className = {styles.linkIcon} />
                        </Link>
                        <Link to="/https://twitter.com/venturebeat">
                            <InstagramIcon className = {styles.linkIcon} />
                        </Link>
                        <Link to="/https://twitter.com/venturebeat">
                            <RssFeedIcon className = {styles.linkIcon} />
                        </Link>
                    </div>
                </div>

    </div>
{/* Footer End */}
</>

    )
}
export default JobsCard