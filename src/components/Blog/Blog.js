import React from 'react';
import { Divider, Grid, Typography, Avatar, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import { Link } from '@material-ui/icons';
import { portfolio } from '../../portfolio.js';
import { useStyles } from './styles';

export const Blog = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.blogHeading} variant="h4">Blogs</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid className={classes.marginTopSixteen} container direction="row" justifyContent="start" alignItem="center" spacing={4}>
                {portfolio.blogs.map((blog, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                            <Card elevation={12}>
                                <CardHeader
                                    avatar={<Avatar className={classes.avatarStyle} src={blog.logo} alt={blog.logoAlt} />}
                                    title={<Typography className={classes.boldText} variant="h6">{blog.name}</Typography>}
                                    subheader={<Typography variant="body1">{blog.dateOfPublish}</Typography>} />
                                <CardContent>
                                    <Typography variant="body2">{blog.description}</Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="Blog Link">
                                        <Link onClick={() => window.open(blog.link, "_blank")} />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })};
            </Grid>
        </React.Fragment>
    );
};