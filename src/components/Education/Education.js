import React from 'react';
import { Divider, Grid, Typography, Avatar, Button, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { portfolio } from '../../portfolio.js';
import { useStyles } from './styles';

export const Education = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.boldText} variant="h4">Educational Qualifications</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="center" alignItem="center" spacing={4}>
                {portfolio.education.map((edu, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                            <Card elevation={12}>
                                <CardHeader
                                    avatar={<Avatar className={classes.avatarBgColor} aria-label="university initials">{edu.shortform}</Avatar>}
                                    title={<Typography className={classes.boldText} variant="h6" component="p">{edu.name}</Typography>}
                                    subheader={<Typography variant="body2">{edu.years}</Typography>} />
                                <CardMedia
                                    className={classes.cardMediaStyle}
                                    component="img"
                                    image={edu.image}
                                    alt={edu.imageAlt} />
                                <CardContent>
                                    <Typography variant="body1" display="block"><span className={classes.boldText}>Course:</span> {edu.course}</Typography>
                                    <Typography variant="body1" display="block"><span className={classes.boldText}>CGPA:</span> {edu.cgpa}{(edu.cpi) ? (<span> | <span className={classes.boldText}>CPI:</span> {edu.cpi}</span>) : null}</Typography>
                                    <div className={classes.marginTopEight}>
                                        {(edu.degreeCertiLink) ? <Button className={classes.marginRightEight} color="primary" variant="contained" size="small">View Degree Certificate</Button> : null}
                                        <Button color="primary" variant="contained" size="small">View Transcript</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })};
            </Grid>
        </React.Fragment>
    );
};