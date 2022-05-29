import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    aboutMeHeading: {
        fontWeight: 'bold',
        marginTop: 16
    },
    avatarStyle: {
        width: 350,
        height: 350,
        boxShadow: theme.shadows[12]
    },
    headingStyle: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 16
    },
    paragraphStyle: {
        fontSize: 22,
        marginTop: 4
    },
    iconStyle: {
        marginRight: 8,
        fontSize: 40,
        cursor: 'pointer'
    },
    boldText: {
        fontWeight: 'bold'
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