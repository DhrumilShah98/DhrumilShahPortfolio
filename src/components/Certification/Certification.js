import React, { useEffect } from 'react';
import { Typography, Divider, Grid, Card, CardContent, Button } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const Certification = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <React.Fragment>
            <Typography className={classes.certificateHeading} variant="h4">Certifications</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="flex-start" alignItems="stretch" spacing={2}>
                {portfolio.certifications.map((certi, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                            <div data-aos={"flip-left"}>
                                <Card elevation={12}>
                                    <CardContent className={classes.certificateCard}>
                                        <Typography className={classes.boldText} variant="h6" gutterBottom>{certi.name}</Typography>
                                        <Typography variant="body1" component="div"><span className={classes.boldText}>Issue Date:</span> {certi.issueDate}</Typography>
                                        <Typography variant="body1" component="div"><span className={classes.boldText}>Issuer:</span> {certi.issuer}</Typography>
                                        <div className={classes.marginTopEight}>
                                            <Button className={classes.marginRightEight} color="primary" variant="contained" size="small" href={certi.credentialLink} target="_blank">Verify</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};