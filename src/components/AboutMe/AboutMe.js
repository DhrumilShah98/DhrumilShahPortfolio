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
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="center" alignItem="center">
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <Avatar className={classes.avatarStyle} src={portfolio.aboutus.dhrumil_about_image} alt={portfolio.aboutus.fullName} />
                </Grid>
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div className={classes.headingStyle}>
                        <Typography className={classes.boldText} variant="h3" display="block">{portfolio.aboutus.heading}</Typography>
                        <Lottie style={{ marginLeft: 0, marginRight: 0 }} options={{ loop: true, autoplay: true, animationData: handWaveAnimationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={70} height={70} />
                    </div>
                    <Typography variant="body1" display="block" className={classes.paragraphStyle}>{portfolio.aboutus.paragraph}</Typography>
                    <div className={classes.marginTopEight}>
                        <LinkedIn className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.linkedInLink} />
                        <GitHub className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.githubLink} />
                        <Instagram className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.instagramLink} />
                        <Facebook className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.facebookLink} />
                        <Twitter className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.twitterLink} />
                        <Email className={classes.iconStyle} onClick={() => window.location.href = `mailto:${portfolio.aboutus.email}`} />
                    </div>
                    <div className={classes.marginTopEight}>
                        <Button className={classes.marginRightEight} color="primary" variant="contained" size="small" href={`mailto:${portfolio.aboutus.email}`}>Email Me</Button>
                        <Button color="primary" variant="contained" size="small" href={portfolio.aboutus.resumeLink}>View Resume</Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};