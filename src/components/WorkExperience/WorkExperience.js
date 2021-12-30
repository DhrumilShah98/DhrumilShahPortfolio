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
            <Typography className={classes.marginTopSixteen} variant="h5" display="block">
                <span role="img" aria-label="Office Building">🏢</span> <span className={classes.boldText}>{portfolio.professionalExp.company1}</span>
            </Typography>
            <Typography className={`${classes.marginLeftEight} ${classes.marginTopEight}`} variant="h6" display="block">
                <span role="img" aria-label="Developer">👨‍💻</span> <span className={classes.boldText}>{portfolio.professionalExp.position1}</span>
            </Typography>
            <List className={classes.marginLeftEight} dense={true}>
                {portfolio.professionalExp.position1Desp.map((value, index) => { return generateListItem(index, value); })}
            </List>
            <Typography className={`${classes.marginLeftEight} ${classes.marginTopEight}`} variant="h6" display="block">
                <span role="img" aria-label="Developer">👨‍💻</span> <span className={classes.boldText}>{portfolio.professionalExp.position2}</span>
            </Typography>
            <List className={classes.marginLeftEight} dense={true}>
                {portfolio.professionalExp.position2Desp.map((value, index) => { return generateListItem(index, value); })}
            </List>
        </React.Fragment>
    );
};