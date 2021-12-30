import React from 'react';
import { Typography, Divider, Grid, Card, CardContent, Button, Box } from '@material-ui/core';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const Certifications = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.certificationsHeading} variant="h4">Certifications</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="start" alignItems="stretch" spacing={2}>
                {portfolio.certifications.map((certi) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card elevation={12} style={{ display: "flex", minHeight: 200 }}>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <CardContent>
                                        <Typography className={classes.boldText} variant="subtitle1" component="p">{certi.name}</Typography>
                                        <Typography variant="subtitle2"><span className={classes.boldText}>Issue Date:</span> {certi.issueDate}</Typography>
                                        <Typography variant="body2" display="block"><span className={classes.boldText}>Issuer:</span> {certi.issuer}</Typography>
                                        <Typography variant="body2" display="block"><span className={classes.boldText}>Credential ID:</span> {certi.credentialId}</Typography>
                                        <div className={classes.marginTopEight}>
                                            <Button className={classes.marginRightEight} color="primary" variant="contained" size="small" href={certi.credentialLink}>Verify</Button>
                                        </div>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    );
                })};
            </Grid>
        </React.Fragment >
    );
};