import React, { useEffect } from 'react';
import { Typography, Divider, Chip, Grid } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolio } from '../../portfolio';
import { useStyles } from './styles';

export const Skill = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const getSkillsStack = (skillType, skills) => {
        return (
            <React.Fragment>
                <Typography className={classes.marginTopSixteen} variant="h6" display="block">
                    <span role="img" aria-label="Developer">🤹</span > <span className={classes.boldText}>{skillType}</span>
                </Typography>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                    {skills.map((value, index) => {
                        return (
                            <Grid key={index} item>
                                <div data-aos={"zoom-in"}>
                                    <Chip className={classes.skillStyle} label={value} color="primary" size="small" />
                                </div>
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
                {getSkillsStack("Tools", portfolio.skills.tools)}
                {getSkillsStack("Frameworks", portfolio.skills.frameworks)}
                {getSkillsStack("Databases", portfolio.skills.databases)}
                {getSkillsStack("Industry Knowledge", portfolio.skills.industryKnowledge)}
                {getSkillsStack("Version Control", portfolio.skills.versionControl)}
            </div>
        </React.Fragment>
    );
};