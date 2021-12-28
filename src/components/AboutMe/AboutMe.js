import React from 'react';
import Lottie from 'react-lottie';
import { Avatar, Divider, Grid, Typography, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import dhrumil_about_image from '../../assets/dhrumil_images/dhrumil_image_1.jpeg';
import * as handWaveAnimationData from '../../assets/lottie_animations/hand_wave.json';
import { useStyles } from './styles';

const linkedInLink = "https://www.linkedin.com/in/dhrumilshah98/";
const githubLink = "https://github.com/DhrumilShah98";
const instagramLink = "https://www.instagram.com/dhrumil_shah_98/";
const facebookLink = "https://www.facebook.com/dhrumil.shah1998/";
const twitterLink = "https://twitter.com/dhrumil_shah_98";

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.boldText}>About Me</Typography>
            <Divider className={classes.marginTopEight} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="center" alignItem="center">
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <Avatar src={dhrumil_about_image} alt="Dhrumil Shah" className={classes.avatarSize} />
                </Grid>
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div className={classes.headingStyle}>
                        <Typography variant="h3" display="block" className={classes.boldText}>Hi all, I'm Dhrumil</Typography>
                        <Lottie options={{ loop: true, autoplay: true, animationData: handWaveAnimationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={70} height={70} style={{ marginLeft: 0, marginRight: 0 }} />
                    </div>
                    <Typography variant="p" display="block" className={classes.paragraphStyle}>I am a computer science student who loves analyzing, designing, constructing, and testing end-user applications by applying software design and development principles. My area of interest includes Full-stack web development, Mobile development and Cloud Technologies.</Typography>
                    <div className={classes.marginTopEight}>
                        <LinkedInIcon className={classes.iconStyle} onClick={e => window.location.href = linkedInLink} />
                        <GitHubIcon className={classes.iconStyle} onClick={e => window.location.href = githubLink} />
                        <InstagramIcon className={classes.iconStyle} onClick={e => window.location.href = instagramLink} />
                        <FacebookIcon className={classes.iconStyle} onClick={e => window.location.href = facebookLink} />
                        <TwitterIcon className={classes.iconStyle} onClick={e => window.location.href = twitterLink} />
                    </div>
                    <div className={classes.marginTopEight}>
                        <Button color="primary" variant="outlined" href="mailto:shah.dhrumil1998@gmail.com" size="small">Contact Me</Button>
                        <Button color="primary" variant="outlined" className={classes.marginLeftEight} size="small">Download CV</Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};