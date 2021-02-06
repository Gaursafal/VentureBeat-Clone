import { Button, Typography } from '@material-ui/core';
import React from 'react';
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import styles from '../Css/SpecialIssue.module.css'
import Navbar from '../Component/Navbar'

const useStyles = makeStyles((theme) => ({
    logo: {
        display: "flex",
        flexDirection: "row",
        marginRight: 20,
        textDecoration: "none",
        marginLeft: 150,
        marginTop: 15
    },
    img : {
        marginTop: "50px",
        marginLeft: "10%"
      },
      typo : {
        display: "flex",
        flexDirection: "row",
        marginBottom: "100px"
      },
      btn : {
        textAlign: "center"
      }
      
   
}));

const SpecialIssue = () => {
    const classes = useStyles();
    return (
        <div>
            <div style = {{background:"rgb(23,41,86)"}}>
            <Navbar/>
            </div>
            
            <div className={classes.img}>
                <div style={{ marginBottom: "50px" }}>
                    <img width="1200px" src="https://venturebeat.com/wp-content/uploads/2021/01/vb-special-issue-ai-health-care-Header.jpg?w=2048&strip=all" alt="img" />
                </div>
                <div className={classes.typo}>
                    <Typography>
                        Artificial intelligence and health care both deal heavily with issues of <br />
                            complexity, efficacy, and societal impact. All of that is multiplied when the <br />
                            two intersect. As health care providers and vendors work to use AI and data <br />
                            to improve patient care, health outcomes, medical research, and more, they <br />
                            face what are now standard AI challenges. Data is difficult and messy. <br />
                            Machine learning models struggle with bias and accuracy. And ethical <br />
                            challenges abound. But there’s a heightened need to solve these problems <br />
                            when they’re couched within the daily life-and-death context of health care.<br /><br />
                            Then, in the midst of the AI’s growth in health care, the pandemic hit, <br />
                            challenging old ways of doing things and pushing systems to their breaking <br />
                            points. In this issue, we examine how the medical field is using AI and data to <br />
                            tackle the challenges of this extraordinary time.<br /><br />

                            From developing ways to handle massive amounts of tricky data, to using <br />
                            telemedicine and wearables to offer remote care, to challenging the pitfalls of <br />
                            automation bias, we’re encountering sea changes in health care. And  <br />
                            because of the pandemic, the changes have to happen quickly.<br /> <br />

                            But a certain optimism persists; there’s a sense that despite unprecedented <br />
                            challenges to the medical field, careful and responsible use of AI can enable <br />
                            permanent, positive changes in the health care system.
             </Typography>
                    <div style={{ marginLeft: "110px" }}>
                        <Typography variant="h5">In The Issue</Typography><br />
                        <Typography>AI in health care creates unique data challenges</Typography><br />
                        <Typography>Telemedicine and chatbots are using data to <br /> transform healthcare</Typography><br />
                        <Typography>Confidence, uncertainty, and trust in AI affect <br /> how humans make decisions</Typography><br />
                        <Typography>Elder care, wireless AI, and the Internet of <br /> Medical Things</Typography><br />
                        <Typography>We’re two steps away from democratized, on <br />-demand health care</Typography><br />
                        <Typography>How the responsible use of AI can help create a <br /> better health system (sponsored)</Typography><br />
                    </div>
                </div>
                {/* Card1 Start */}
                <div className={classes.typo}>
                    <div>
                        <img width="550px" src="https://venturebeat.com/wp-content/uploads/2021/01/AI-in-health-care-creates-unique-data-challenges-01.jpg?w=800" alt="img" />
                    </div>
                    <div style={{ marginLeft: "60px" }}>
                        <Typography variant="h5">AI in health care creates unique data <br /> challenges</Typography><br />
                        <Typography>
                            AI algorithms are being applied to health care. But they <br />
                        require training data, and challenges abound when it <br />
                        comes to health data management.
                        </Typography>
                        <Button color="secondary">Kyle Wiggers</Button>
                    </div>
                </div>
                {/* Card1 End  */}

                {/* Card2 Start */}
                <div className={classes.typo}>
                    <div>
                        <Typography variant="h5">Telemedicine and chatbots are using <br /> data to transform healthcare</Typography><br />
                        <Typography>
                            AI algorithms are being applied to health care. But they <br />
                        require training data, and challenges abound when it <br />
                        comes to health data management.
                        </Typography>
                        <Button color="secondary">Chris O’Brien</Button>
                    </div>
                    <div style={{ marginLeft: "160px" }}>
                        <img width="550px" src="https://venturebeat.com/wp-content/uploads/2021/01/How-telemedicine-and-chatbots-are-using-to-data-to-transform-healthcare-01.jpg?resize=800,399" alt="img" />
                    </div>
                </div>
                {/* Card2 End */}

                {/* Card3 Start */}
                <div className={classes.typo}>
                    <div>
                        <Typography variant="h5">Elder care, wireless AI, and the Internet of <br /> Medical Things</Typography><br />
                        <Typography>
                            Senior citizens are accustomed to constant probes by doctors, but <br />
                             wireless AI tech is enabling massive-scale, nonintrusive data <br />
                              monitoring.
                        </Typography>
                        <Button color="secondary">Jeremy Horwitz</Button>
                    </div>
                    <div style={{ marginLeft: "170px" }}>
                        <Typography variant="h5">We’re two steps away from democratized, <br /> on-demand health care</Typography><br />
                        <Typography>
                            Just as with services such as Uber, consumers shouldn’t have to go <br />
                             out and seek health services; the services should be available on <br />
                              demand.
                        </Typography>
                        <Button color="secondary">Damon Altomare, VIP StarNetwork</Button>
                    </div>
                </div>
                {/* Card3 End */}

                {/* Card4 Start */}
                <div className={classes.typo}>
                    <div>
                        <img width="550px" src="https://venturebeat.com/wp-content/uploads/2021/02/How-confidence-uncertainty-and-trust-influence-human-decision-making-01.jpg?w=800" alt="img" />
                    </div>
                    <div style={{ marginLeft: "60px" }}>
                        <Typography variant="h5">AI in health care creates unique data <br /> challenges</Typography><br />
                        <Typography>
                            AI algorithms are being applied to health care. But they <br />
                        require training data, and challenges abound when it <br />
                        comes to health data management.
                        </Typography>
                        <Button color="secondary">Kyle Wiggers</Button>
                    </div>
                </div>
                {/* Card4 End */}

                {/* Card5 Start */}
                <div className={classes.typo}>
                    <div>
                        <Typography variant="h5">Telemedicine and chatbots are using <br /> data to transform healthcare</Typography><br />
                        <Typography>
                            AI algorithms are being applied to health care. But they <br />
                        require training data, and challenges abound when it <br />
                        comes to health data management.
                        </Typography>
                        <Button color="secondary">Chris O’Brien</Button>
                    </div>
                    <div style={{ marginLeft: "160px" }}>
                        <img width="550px" src="https://venturebeat.com/wp-content/uploads/2021/01/How-the-responsible-use-of-AI-can-create-a-better-health-system-01.jpg?w=800" alt="img" />
                    </div>
                </div>
                {/* Card5 End */}

            </div>
            <div className={classes.btn}>
                <Button color="secondary">Subscribe to our AI Weekly newsletter</Button>
                <br /><br /><br />
                <Button color="secondary">Check out our previous Special Issue: Automation and jobs in the new normal</Button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default SpecialIssue;