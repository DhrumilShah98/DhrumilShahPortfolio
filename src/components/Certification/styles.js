import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    certificateHeading: {
        marginTop: 32,
        fontWeight: 'bold'
    },
    certificateCard: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 200
    },
    boldText: {
        fontWeight: 'bold'
    },
    marginTopTwo: {
        marginTop: 2
    },
    marginTopEight: {
        marginTop: 8,
    },
    marginTopSixteen: {
        marginTop: 16
    },
    marginRightEight: {
        marginRight: 8
    }
}));