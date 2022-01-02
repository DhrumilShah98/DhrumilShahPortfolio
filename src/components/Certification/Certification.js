import React from 'react';
import { Typography, Divider, Grid, Card, CardContent, Button } from '@material-ui/core';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const Certification = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.certificateHeading} variant="h4">Certifications</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="start" alignItems="stretch" spacing={2}>
                {portfolio.certifications.map((certi) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card elevation={12}>
                                <CardContent className={classes.certificateCard}>
                                    <Typography className={classes.boldText} variant="h6" gutterBottom>{certi.name}</Typography>
                                    <Typography variant="body1" component="div"><span className={classes.boldText}>Issue Date:</span> {certi.issueDate}</Typography>
                                    <Typography variant="body1" component="div"><span className={classes.boldText}>Issuer:</span> {certi.issuer}</Typography>
                                    <div className={classes.marginTopEight}>
                                        <Button className={classes.marginRightEight} color="primary" variant="contained" size="small" href={certi.credentialLink}>Verify</Button>
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