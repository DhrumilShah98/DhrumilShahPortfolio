import React, { useEffect } from 'react';
import { Typography, Divider, Grid, Button } from '@material-ui/core';
import { LinkedIn, GitHub, Instagram, Facebook, Twitter, Email } from '@material-ui/icons';
import Lottie from 'react-lottie';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as contactMeData from '../../assets/lottie_animations/contact_me.json';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const ContactMe = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <React.Fragment>
            <Typography className={classes.contactMeHeading} variant="h4">Contact Me</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="center" alignItem="center">
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div data-aos={"fade-up"}>
                        <div className={classes.headingStyle}>
                            <Typography className={classes.boldText} variant="h5" gutterBottom>{portfolio.contactMe.line}</Typography>
                        </div>
                        <Typography className={classes.paragraphStyle} variant="body1" gutterBottom>{portfolio.aboutme.email}</Typography>
                        <Typography className={classes.paragraphStyle} variant="body1" gutterBottom>{portfolio.contactMe.number}</Typography>
                        <div className={classes.marginTopEight}>
                            <LinkedIn className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.linkedInLink, "_blank")} />
                            <GitHub className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.githubLink, "_blank")} />
                            <Instagram className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.instagramLink, "_blank")} />
                            <Facebook className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.facebookLink, "_blank")} />
                            <Twitter className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.twitterLink, "_blank")} />
                            <Email className={classes.iconStyle} onClick={() => window.location.href = `mailto:${portfolio.aboutme.email}`} />
                        </div>
                        <Button className={classes.marginTopEight} color="primary" variant="contained" size="small" href={`mailto:${portfolio.aboutme.email}`}>Email Me</Button>
                    </div>
                </Grid>
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <div data-aos={"fade-up"}>
                        <Lottie style={{ margin: 0 }} options={{ loop: true, autoplay: true, animationData: contactMeData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={350} height={350} />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment >
    );
};