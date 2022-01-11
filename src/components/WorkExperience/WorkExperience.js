import React from 'react';
import { Typography, Divider, List, ListItem, ListItemText } from '@material-ui/core';
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

    return (
        <React.Fragment>
            <Typography className={classes.workExperienceHeading} variant="h4">Professional Experience</Typography>
            <Divider className={classes.marginTopTwo} />
            {portfolio.experiences.map((exp, index) => {
                return (
                    <React.Fragment>
                        <Typography className={classes.marginTopSixteen} variant="h5" display="block">
                            <span role="img" aria-label="Office Building">🏢</span> <span className={classes.boldText}>{exp.company}</span>
                        </Typography>
                        <Typography className={`${classes.marginLeftEight} ${classes.marginTopEight}`} variant="h6" display="block">
                            <span role="img" aria-label="Developer">👨‍💻</span> <span className={classes.boldText}>{exp.position}</span>
                        </Typography>
                        {(exp.positionWork) ? <Typography className={classes.marginLeftEight} variant="body1">
                            {exp.positionWork.line}&nbsp;-&nbsp;<a href={exp.positionWork.name1Link} target="_blank" rel="noreferrer">{exp.positionWork.name1}</a>&nbsp;|&nbsp;<a href={exp.positionWork.name2Link} target="_blank" rel="noreferrer">{exp.positionWork.name2}</a>
                        </Typography> : null}
                        <List className={classes.marginLeftEight} dense={true}>
                            {exp.positionWorkDesp.map((value, index) => { return generateListItem(index, value); })}
                        </List>
                    </React.Fragment>
                );
            })};
        </React.Fragment>
    );
};