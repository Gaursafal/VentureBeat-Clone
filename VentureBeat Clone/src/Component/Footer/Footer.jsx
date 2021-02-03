import React from 'react';
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className = {styles.top}>
                    <h1 style = {{fontSize : "55px"}}>VB</h1>
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

                <div>
                    <Link to="/vbLab" className={styles.link}>VB Lab</Link>
                    <Link to="/vbLab" className={styles.link}>Newsletters</Link>
                    <Link to="/vbLab" className={styles.link}>Events</Link>
                    <Link to="/vbLab" className={styles.link}>Special Issue</Link>
                    <Link to="/vbLab" className={styles.link}>Product Comparisons</Link>
                    <Link to="/vbLab" className={styles.link}>Jobs</Link>
                </div>
                <div className = {styles.details}>
                    <Link to="/vbLab" className={styles.link1}>About</Link>
                    <Link to="/vbLab" className={styles.link1}>Contact</Link>
                    <Link to="/vbLab" className={styles.link1}>Careers</Link>
                    <Link to="/vbLab" className={styles.link1}>Privacy Policy</Link>
                    <Link to="/vbLab" className={styles.link1}>Terms of Service</Link>
                </div>
                <div className = {styles.footer}>
                © 2021 VentureBeat. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;