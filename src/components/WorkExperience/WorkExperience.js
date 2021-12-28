import React from "react";
import { Typography, Divider, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code'
import { useStyles } from './styles';

const androidDeveloperList = [
    "Devised workflows, architecture, and user interfaces for the application using tools like Lucidchart, draw.io, and Figma after identifying key features from the users.",
    "Increased the application development speed by 35% adhering to Google Material Design guidelines and Model-View-View-Model (MVVM) architecture pattern.",
    "Increased the bug detection efficiency and accuracy by 70% by designing comprehensive test cases and performing exhaustive testing of the application.",
    "Drove the application deployment using the Release on Demand methodology in an incremental fashion adhering to the security considerations agreed upon.",
    "Optimized and reduced the service layer's code by 30%, resulting in easier code maintenance and fewer bugs in production."
];

const androidInternList = [
    "Gained practical experience with Java, Kotlin, Android SDK, Gradle, Third-party Libraries, RESTful APIs, VCS, SonarLint, Firebase, GCP and Google Play Console in less than 2 months.",
    "Managed project development process for both the applications from requirement specifications to deployment of the application and attained 80% positive feedback.",
    "Learned and Integrated Shopify Storefront APIs and Shopify Android Buy SDK in WheelIntel application."
];

const generateListItem = (key, value) => {
    return <ListItem key={key}>
        <ListItemIcon><CodeIcon /></ListItemIcon>
        <ListItemText primary={value} />
    </ListItem>
};

export const WorkExperience = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" className={classes.workExperienceHeading}>Professional Experience</Typography>
            <Divider className={classes.marginTopEight} />
            <Typography variant="h5" display="block" className={classes.marginTopSixteen}>
                <span role="img" aria-label="Office Building">🏢</span> <span style={{ fontWeight: "bold" }}>Quixote Automotive Technologies Pvt. Ltd. | Ahmedabad, IN</span>
            </Typography>
            <List dense={true}>
                <ListItem>
                    <Typography variant="h6" display="block" >
                        <span role="img" aria-label="Developer">👨‍💻</span > <span style={{ fontWeight: "bold" }}>Android Developer | Jul 2020 - Feb 2021</span>
                    </Typography>
                </ListItem>
                <ListItem>
                    <List dense={true}>
                        {androidDeveloperList.map((value, index) => {
                            return generateListItem(index, value);
                        })}
                    </List>
                </ListItem>
            </List>
            <List dense={true}>
                <ListItem>
                    <Typography variant="h6" display="block">
                        <span role="img" aria-label="Developer">👨‍💻</span> <span style={{ fontWeight: "bold" }}>Android Intern | Aug 2019 - Feb 2020</span>
                    </Typography>
                </ListItem>
                <ListItem>
                    <List dense={true}>
                        {androidInternList.map((value, index) => {
                            return generateListItem(index, value);
                        })}
                    </List>
                </ListItem>
            </List>
        </React.Fragment>
    );
}