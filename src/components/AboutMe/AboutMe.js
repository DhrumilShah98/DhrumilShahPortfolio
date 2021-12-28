import React from 'react';
import Lottie from 'react-lottie';
import { Avatar, Grid, Typography, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import * as handWaveAnimationData from '../../assets/lottie_animations/hand_wave.json';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="center" alignItem="center">
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <Avatar src={portfolio.dhrumil_about_image} alt={portfolio.fullName} className={classes.avatarStyle}/>
                </Grid>
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div className={classes.headingStyle}>
                        <Typography variant="h3" display="block" className={classes.boldText}>{portfolio.aboutus.heading}</Typography>
                        <Lottie options={{ loop: true, autoplay: true, animationData: handWaveAnimationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={70} height={70} style={{ marginLeft: 0, marginRight: 0 }} />
                    </div>
                    <Typography variant="p" display="block" className={classes.paragraphStyle}>{portfolio.aboutus.paragraph}</Typography>
                    <div className={classes.marginTopEight}>
                        <LinkedInIcon className={classes.iconStyle} onClick={e => window.location.href = portfolio.aboutus.linkedInLink} />
                        <GitHubIcon className={classes.iconStyle} onClick={e => window.location.href = portfolio.aboutus.githubLink} />
                        <InstagramIcon className={classes.iconStyle} onClick={e => window.location.href = portfolio.aboutus.instagramLink} />
                        <FacebookIcon className={classes.iconStyle} onClick={e => window.location.href = portfolio.aboutus.facebookLink} />
                        <TwitterIcon className={classes.iconStyle} onClick={e => window.location.href = portfolio.aboutus.twitterLink} />
                    </div>
                    <div className={classes.marginTopEight}>
                        <Button color="primary" variant="outlined"  className={classes.marginRightEight} href={`mailto:${portfolio.email}`} size="small">Contact Me</Button>
                        <Button color="primary" variant="outlined" size="small">Download CV</Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};