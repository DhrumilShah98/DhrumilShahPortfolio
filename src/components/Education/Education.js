import React from 'react';
import { Divider, Grid, Typography, Avatar, Button, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { portfolio } from '../../portfolio.js';
import { useStyles } from './styles';

export const Education = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.boldText}>Educational Qualifications</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="center" alignItem="center" spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card elevation={6}>
                        <CardHeader
                            avatar={<Avatar className={classes.avatarBgColor} aria-label="recipe">{portfolio.education.university1.shortform}</Avatar>}
                            title={<Typography variant="p" component="h2">{portfolio.education.university1.name}</Typography>}
                            subheader={<Typography variant="p">{portfolio.education.university1.years}</Typography>} />
                        <CardMedia
                            component="img"
                            className={classes.cardMediaStyle}
                            image={portfolio.education.university1.image}
                            alt={portfolio.education.university1.imageAlt} />
                        <CardContent>
                            <Typography variant="p" display="block"><span className={classes.boldText}>Course:</span> {portfolio.education.university1.course}</Typography>
                            <Typography variant="p" display="block"><span className={classes.boldText}>CGPA:</span> {portfolio.education.university1.cgpa}</Typography>
                            <Button color="primary" variant="contained" size="small" className={classes.marginTopEight}>View Transcript</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card elevation={6}>
                        <CardHeader
                            avatar={<Avatar style={{ backgroundColor: "#669CC0" }} aria-label="recipe">{portfolio.education.university2.shortform}</Avatar>}
                            title={<Typography variant="p" component="h2">{portfolio.education.university2.name}</Typography>}
                            subheader={<Typography variant="p">{portfolio.education.university2.years}</Typography>} />
                        <CardMedia
                            component="img"
                            className={classes.cardMediaStyle}
                            image={portfolio.education.university2.image}
                            alt={portfolio.education.university2.imageAlt} />
                        <CardContent>
                            <Typography variant="p" display="block"><span className={classes.boldText}>Course:</span> {portfolio.education.university2.course}</Typography>
                            <Typography variant="p" display="block"><span className={classes.boldText}>CGPA:</span> {portfolio.education.university2.cgpa} | <span style={{ fontWeight: "bold" }}>CPI:</span> {portfolio.education.university2.cpi}</Typography>
                            <div className={classes.marginTopEight}>
                                <Button color="primary" variant="contained" size="small" className={classes.marginRightEight}>View Degree Certificate</Button>
                                <Button color="primary" variant="contained" size="small">View Transcript</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};