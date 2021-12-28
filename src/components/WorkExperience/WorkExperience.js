import React from "react";
import { Typography, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

const generateListItem = (key, value) => {
    return <ListItem key={key}>
        <ListItemText primary={<Typography variant="p"><span role="img" aria-label="Lightning">⚡</span > {value}</Typography>} /></ListItem>
};

export const WorkExperience = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.workExperienceHeading}>Professional Experience</Typography>
            <Divider className={classes.marginTopTwo} />
            <Typography variant="h5" display="block" className={classes.marginTopSixteen}>
                <span role="img" aria-label="Office Building">🏢</span> <span className={classes.boldText}>{portfolio.professionalExp.company1}</span>
            </Typography>
            <List dense={true}>
                <ListItem>
                    <Typography variant="h6" display="block" >
                        <span role="img" aria-label="Developer">👨‍💻</span > <span className={classes.boldText}>{portfolio.professionalExp.position1}</span>
                    </Typography>
                </ListItem>
                <ListItem>
                    <List dense={true}>
                        {portfolio.professionalExp.position1Desp.map((value, index) => { return generateListItem(index, value); })}
                    </List>
                </ListItem>
            </List>
            <List dense={true}>
                <ListItem>
                    <Typography variant="h6" display="block">
                        <span role="img" aria-label="Developer">👨‍💻</span> <span className={classes.boldText}>{portfolio.professionalExp.position2}</span>
                    </Typography>
                </ListItem>
                <ListItem>
                    <List dense={true}>
                        {portfolio.professionalExp.position2Desp.map((value, index) => { return generateListItem(index, value); })}
                    </List>
                </ListItem>
            </List>
        </React.Fragment>
    );
};