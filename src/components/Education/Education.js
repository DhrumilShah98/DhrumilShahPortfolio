import React from 'react';
import { Divider, Grid, Typography, Avatar, Button, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import dalhousie_university_image from '../../assets/education_images/dalhousie_university.jpg';
import gujarat_technological_university_image from '../../assets/education_images/gujarat_technological_university.jpg';
import { useStyles } from './styles';

export const Education = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.educationHeading}>Education</Typography>
            <Divider className={classes.marginTopEight} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="center" alignItem="center" spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card>
                        <CardHeader
                            avatar={<Avatar style={{ backgroundColor: "#669CC0" }} aria-label="recipe">DU</Avatar>}
                            title={<Typography variant="p" component="h2">Dalhousie University | Halifax, CA</Typography>}
                            subheader={<Typography variant="p">Jan 2021 - April 2022</Typography>} />
                        <CardMedia
                            component="img"
                            className={classes.cardMediaStyle}
                            image={dalhousie_university_image}
                            alt="Dalhousie University Logo and Text" />
                        <CardContent>
                            <Typography variant="p" display="block"><span className={classes.boldText}>Course:</span> Master of Applied Computer Science</Typography>
                            <Typography variant="p" display="block"><span className={classes.boldText}>CGPA:</span> 4.20/4.30</Typography>
                            <Button color="primary" variant="outlined" size="small" className={classes.marginTopEight}>View Transcript</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card>
                        <CardHeader
                            avatar={<Avatar style={{ backgroundColor: "#669CC0" }} aria-label="recipe">GTU</Avatar>}
                            title={<Typography variant="p" component="h2">Gujarat Technological University | Ahmedabad, IN</Typography>}
                            subheader={<Typography variant="p">Jul 2015 - May 2019</Typography>} />
                        <CardMedia
                            component="img"
                            className={classes.cardMediaStyle}
                            image={gujarat_technological_university_image}
                            alt="Gujarat Technological University Logo and Text" />
                        <CardContent>
                            <Typography variant="p" display="block"><span className={classes.boldText}>Course:</span> Bachelors in Information and Communication Technology</Typography>
                            <Typography variant="p" display="block"><span className={classes.boldText}>CGPA:</span> 9.06/10 | <span style={{ fontWeight: "bold" }}>CPI:</span> 9.14/10</Typography>
                            <div className={classes.marginTopEight}>
                                <Button color="primary" variant="outlined" href="mailto:shah.dhrumil1998@gmail.com" size="small">View Degree Certificate</Button>
                                <Button color="primary" variant="outlined" className={classes.marginLeftEight} size="small">View Transcript</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}