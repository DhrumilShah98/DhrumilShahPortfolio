import React from 'react';
import { Typography, Divider, Chip, Grid } from '@material-ui/core';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const Skill = () => {
    const classes = useStyles();

    const getSkillsStack = (skillType, skills) => {
        return (
            <React.Fragment>
                <Typography className={classes.marginTopSixteen} variant="h6" display="block">
                    <span role="img" aria-label="Developer">🤹</span > <span className={classes.boldText}>{skillType}</span>
                </Typography>
                <Grid container direction="row" justifyContent="start" alignItem="center" spacing={1}>
                    {skills.map((value) => {
                        return (
                            <Grid item>
                                <Chip className={classes.skillStyle} label={value} color="primary" size="small" />
                            </Grid>
                        );
                    })}
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Typography className={classes.skillHeading} variant="h4">Skills</Typography>
            <Divider className={classes.marginTopTwo} />
            <div className={classes.marginTopSixteen}>
                {getSkillsStack("Technologies", portfolio.skills.technologies)}
                {getSkillsStack("Frameworks", portfolio.skills.frameworks)}
                {getSkillsStack("Databases", portfolio.skills.databases)}
                {getSkillsStack("Cloud Technologies", portfolio.skills.cloudTechnologies)}
                {getSkillsStack("Industry Knowledge", portfolio.skills.industryKnowledge)}
                {getSkillsStack("Version Control", portfolio.skills.versionControl)}
            </div>
        </React.Fragment>
    );
};