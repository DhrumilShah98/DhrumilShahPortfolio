import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    boldText: {
        fontWeight: "bold"
    },
    marginTopEight: {
        marginTop: 8
    },
    marginLeftEight: {
        marginLeft: 8
    },
    marginTopSixteen: {
        marginTop: 16
    },
    avatarSize: {
        width: 300,
        height: 300
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
    }
}));