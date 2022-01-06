import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const Footer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography
                variant="h6"
                className={classes.footerStyle}>
                Made with&nbsp;<span role="img" aria-label="heart">💖</span>&nbsp;by&nbsp;<a href="https://www.linkedin.com/in/dhrumilshah98/" target="_blank" rel="noreferrer">Dhrumil Shah</a>
            </Typography>
        </React.Fragment>
    );
};