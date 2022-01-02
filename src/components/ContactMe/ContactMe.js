import React from 'react';
import Lottie from 'react-lottie';
import { Typography, Divider, Grid, Button } from '@material-ui/core';
import { LinkedIn, GitHub, Instagram, Facebook, Twitter, Email } from '@material-ui/icons';
import * as contactMeData from '../../assets/lottie_animations/contact_me.json';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const ContactMe = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.contactMeHeading} variant="h4">Contact Me</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="center" alignItem="center">
                <Grid item xs="auto" sm="auto" md={8} lg={8}>
                    <div className={classes.headingStyle}>
                        <Typography className={classes.boldText} variant="h5" gutterBottom>{portfolio.contactMe.line}</Typography>
                    </div>
                    <Typography className={classes.paragraphStyle} variant="body1" gutterBottom>{portfolio.aboutus.email}</Typography>
                    <Typography className={classes.paragraphStyle} variant="body1" gutterBottom>{portfolio.contactMe.number}</Typography>
                    <div className={classes.marginTopEight}>
                        <LinkedIn className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.linkedInLink} />
                        <GitHub className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.githubLink} />
                        <Instagram className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.instagramLink} />
                        <Facebook className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.facebookLink} />
                        <Twitter className={classes.iconStyle} onClick={() => window.location.href = portfolio.aboutus.twitterLink} />
                        <Email className={classes.iconStyle} onClick={() => window.location.href = `mailto:${portfolio.aboutus.email}`} />
                    </div>
                    <Button className={classes.marginTopEight} color="primary" variant="contained" size="small" href={`mailto:${portfolio.aboutus.email}`}>Email Me</Button>
                </Grid>
                <Grid item xs="auto" sm="auto" md={4} lg={4}>
                    <Lottie style={{ margin: 0 }} options={{ loop: true, autoplay: true, animationData: contactMeData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} width={350} height={350} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};