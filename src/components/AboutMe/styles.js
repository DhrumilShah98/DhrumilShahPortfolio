import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    aboutMeHeading: {
        fontWeight: "bold",
        marginTop: 16
    },
    boldText: {
        fontWeight: "bold"
    },
    avatarStyle: {
        width: 300,
        height: 300,
        boxShadow: theme.shadows[6]
    },
    headingStyle: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 16
    },
    paragraphStyle: {
        fontSize: 22,
        marginTop: 16
    },
    iconStyle: {
        marginRight: 8,
        fontSize: 40
    },
    marginTopTwo: {
        marginTop: 2
    },
    marginTopEight: {
        marginTop: 8
    },
    marginTopSixteen: {
        marginTop: 16
    },
    marginRightEight: {
        marginRight: 8
    },
}));