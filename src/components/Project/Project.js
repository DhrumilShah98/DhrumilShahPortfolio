import React, { useEffect } from 'react';
import { Typography, Divider, Grid, Card, CardContent, CardActions, Collapse, IconButton, Chip, styled } from '@material-ui/core';
import { GitHub, ExpandMore, Link } from '@material-ui/icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolio } from '../../portfolio.js';
import { useStyles } from './styles';

const ExpandMoreFunc = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", { duration: theme.transitions.duration.shortest }),
}));

export const Project = () => {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const getProjectStack = (projectTechName, projectTechStack) => {
        return (
            <React.Fragment>
                <Typography className={classes.marginTopSixteen} variant="body1">
                    <span className={classes.boldText}>{projectTechName}</span>
                </Typography>
                <Grid container direction="row" justifyContent="start" alignItem="center" spacing={1}>
                    {projectTechStack.map((value) => {
                        return (
                            <Grid item><Chip label={value} color="primary" size="small" /></Grid>
                        );
                    })}
                </Grid>
            </React.Fragment>
        );
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <React.Fragment>
            <Typography className={classes.projectHeading} variant="h4">Projects</Typography>
            <Divider className={classes.marginTopTwo} />
            <Grid container className={classes.marginTopSixteen} direction="row" justifyContent="start" alignItems="stretch" spacing={2}>
                {portfolio.projects.map((project) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div data-aos={"flip-left"}>
                                <Card elevation={12} style={{ minHeight: 150 }}>
                                    <CardContent>
                                        <Typography className={classes.boldText} variant="h6" gutterBottom>{project.projectName}</Typography>
                                        <Typography variant="body1"><span className={classes.boldText}>Project Duration:</span> {project.projectDuration}</Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="Github Link">
                                            <GitHub onClick={() => window.open(project.projectGitHubLink, "_blank")} />
                                        </IconButton>
                                        {(project.projectDeploymentLink) ?
                                            <IconButton aria-label="Deployment Link">
                                                <Link onClick={() => window.open(project.projectDeploymentLink, "_blank")} />
                                            </IconButton> : null}
                                        <ExpandMoreFunc
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="Show More" >
                                            <ExpandMore />
                                        </ExpandMoreFunc>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography variant="body1"><span className={classes.boldText}>About</span></Typography>
                                            <Typography variant="body1">{project.projectAbout}</Typography>
                                            {(project.projectTechnologies) ? getProjectStack("Technologies", project.projectTechnologies) : <span></span>}
                                            {(project.projectAWSTechnologies) ? getProjectStack("AWS Technologies", project.projectAWSTechnologies) : <span></span>}
                                            {(project.projectGCPTechnologies) ? getProjectStack("GCP Technologies", project.projectGCPTechnologies) : <span></span>}
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};