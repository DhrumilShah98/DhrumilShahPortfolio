import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cardMediaStyle: {
        maxHeight: 250,
        height: '80%'
    },
    avatarColor: {
        backgroundColor: blue['A700'],
        color: theme.palette.text.primary
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