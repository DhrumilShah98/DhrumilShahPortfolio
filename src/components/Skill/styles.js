import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    skillHeading: {
        marginTop: 32,
        fontWeight: 'bold'
    },
    skillStyle: {
        boxShadow: theme.shadows[6]
    },
    boldText: {
        fontWeight: 'bold'
    },
    marginTopTwo: {
        marginTop: 2,
    },
    marginTopEight: {
        marginTop: 8,
    },
    marginTopSixteen: {
        marginTop: 16
    },
    marginLeftEight: {
        marginLeft: 8
    },
}));