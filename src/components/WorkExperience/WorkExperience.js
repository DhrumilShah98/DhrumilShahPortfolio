import React, { useEffect } from 'react';
import { Typography, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

const generateListItem = (key, value) => {
    return (
        <ListItem key={key}>
            <ListItemText primary={<Typography variant="body1"><span role="img" aria-label="Lightning">⚡</span > {value}</Typography>} />
        </ListItem>
    );
};

export const WorkExperience = () => {
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <React.Fragment>
            <Typography className={classes.workExperienceHeading} variant="h4">Professional Experience</Typography>
            <Divider className={classes.marginTopTwo} />
            {portfolio.experiences.map((exp, index) => {
                return (
                    <React.Fragment key={index}>
                        <div data-aos={"fade-up"}>
                            <Typography className={classes.marginTopSixteen} variant="h5" display="block">
                                <span role="img" aria-label="Office Building">🏢</span> <span className={classes.boldText}>{exp.company}</span>
                            </Typography>
                            <Typography className={`${classes.marginLeftEight} ${classes.marginTopEight}`} variant="h6" display="block">
                                <span role="img" aria-label="Developer">👨‍💻</span> <span className={classes.boldText}>{exp.position}</span>
                            </Typography>
                            {(exp.projects.length > 0) ?
                                <Typography className={classes.marginLeftEight} variant="body1">
                                    Projects:&nbsp;
                                    {(exp.projects.map((project, index) => {
                                        return <span><a style={{ color: theme.palette.text.primary }} href={project.link} target="_blank" rel="noreferrer">{project.name}</a> &nbsp;</span>
                                    }))}
                                </Typography> : null
                            }
                            <List className={classes.marginLeftEight} dense={true}>
                                {exp.work.map((value, index) => { return generateListItem(index, value); })}
                            </List>
                        </div>
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};