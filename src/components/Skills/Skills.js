import React from 'react';
import { Typography, Divider, Chip, Grid } from '@material-ui/core';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const Skills = () => {
    const classes = useStyles();

    const getSkillsStack = (skillType, skills) => {
        return (
            <React.Fragment>
                <Typography variant="h6" display="block" style={{ marginTop: 16 }}>
                    <span role="img" aria-label="Developer">🤹</span > <span className={classes.boldText}>{skillType}</span>
                </Typography>
                <Grid container direction="row" justifyContent="start" alignItem="center" spacing={1}>
                    {skills.map((value) => {
                        return (
                            <Grid item>
                                <Chip label={value} color="primary" size="small" />
                            </Grid>
                        );
                    })}
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.skillsHeading}>Skills</Typography>
            <Divider className={classes.marginTopTwo} />
            <div className={classes.marginTopSixteen}>
                {getSkillsStack("Technologies", portfolio.skills.technologies)}
                {getSkillsStack("Databases", portfolio.skills.databases)}
                {getSkillsStack("Cloud Technologies", portfolio.skills.cloudTechnologies)}
                {getSkillsStack("Industry Knowledge", portfolio.skills.industryKnowledge)}
                {getSkillsStack("Version Control", portfolio.skills.versionControl)}
            </div>
        </React.Fragment>
    );
};