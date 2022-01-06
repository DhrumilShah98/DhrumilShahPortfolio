import React from 'react';
import Lottie from 'react-lottie';
import { Avatar, Grid, Typography, Button } from '@material-ui/core';
import { LinkedIn, GitHub, Instagram, Facebook, Twitter, Email } from '@material-ui/icons';
import * as handWaveAnimationData from '../../assets/lottie_animations/hand_wave.json';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const AboutMe = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.toolbar}></div>
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="center" alignItem="center">
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <Avatar className={classes.avatarStyle} src={portfolio.aboutus.profileImage} alt={portfolio.aboutus.fullName} />
                </Grid>
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div className={classes.headingStyle}>
                        <Typography className={classes.boldText} variant="h3" display="block">{portfolio.aboutus.heading}</Typography>
                        <Lottie style={{ marginLeft: 0, marginRight: 0 }} options={{ loop: true, autoplay: true, animationData: handWaveAnimationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={70} height={70} />
                    </div>
                    <Typography className={classes.paragraphStyle} paragraph>{portfolio.aboutus.paragraph}</Typography>
                    <div className={classes.marginTopEight}>
                        <LinkedIn className={classes.iconStyle} onClick={() => window.open(portfolio.aboutus.linkedInLink, "_blank")} />
                        <GitHub className={classes.iconStyle} onClick={() => window.open(portfolio.aboutus.githubLink, "_blank")} />
                        <Instagram className={classes.iconStyle} onClick={() => window.open(portfolio.aboutus.instagramLink, "_blank")} />
                        <Facebook className={classes.iconStyle} onClick={() => window.open(portfolio.aboutus.facebookLink, "_blank")} />
                        <Twitter className={classes.iconStyle} onClick={() => window.open(portfolio.aboutus.twitterLink, "_blank")} />
                        <Email className={classes.iconStyle} onClick={() => window.location.href = `mailto:${portfolio.aboutus.email}`} />
                    </div>
                    <div className={classes.marginTopEight}>
                        <Button className={classes.marginRightEight} color="primary" variant="contained" size="small" href={`mailto:${portfolio.aboutus.email}`}>Email Me</Button>
                        <Button color="primary" variant="contained" size="small" href={portfolio.aboutus.resumeLink} target="_blank">View Resume</Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};