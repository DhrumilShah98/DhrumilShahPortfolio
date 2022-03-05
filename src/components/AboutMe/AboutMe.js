import React, { useEffect } from 'react';
import { Avatar, Grid, Typography, Button } from '@material-ui/core';
import { LinkedIn, GitHub, Instagram, Facebook, Twitter, Email } from '@material-ui/icons';
import Lottie from 'react-lottie';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as handWaveAnimationData from '../../assets/lottie_animations/hand_wave.json';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const AboutMe = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <React.Fragment>
            <div className={classes.toolbar}></div>
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <div data-aos={"fade-right"}>
                        <Avatar className={classes.avatarStyle} src={portfolio.aboutme.profileImage} alt={portfolio.aboutme.fullName} />
                    </div>
                </Grid>
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div data-aos={"fade-left"}>
                        <div className={classes.headingStyle}>
                            <Typography className={classes.boldText} variant="h3" display="block">{portfolio.aboutme.heading}</Typography>
                            <Lottie style={{ marginLeft: 0, marginRight: 0 }} options={{ loop: true, autoplay: true, animationData: handWaveAnimationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={70} height={70} />
                        </div>
                        <Typography className={classes.paragraphStyle} paragraph>{portfolio.aboutme.paragraph}</Typography>
                        <div className={classes.marginTopEight}>
                            <LinkedIn className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.linkedInLink, "_blank")} />
                            <GitHub className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.githubLink, "_blank")} />
                            <Instagram className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.instagramLink, "_blank")} />
                            <Facebook className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.facebookLink, "_blank")} />
                            <Twitter className={classes.iconStyle} onClick={() => window.open(portfolio.aboutme.twitterLink, "_blank")} />
                            <Email className={classes.iconStyle} onClick={() => window.location.href = `mailto:${portfolio.aboutme.email}`} />
                        </div>
                        <div className={classes.marginTopEight}>
                            <Button className={classes.marginRightEight} color="primary" variant="contained" size="small" href={`mailto:${portfolio.aboutme.email}`}>Email Me</Button>
                            {/* <Button color="primary" variant="contained" size="small" href={portfolio.aboutme.resumeLink} target="_blank">View Resume</Button> */}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment >
    );
};