import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    cardMediaStyle: {
        maxHeight: 250,
        height: "80%"
    },
    avatarBgColor: {
        backgroundColor: blue["A700"]
    },
    boldText: {
        fontWeight: "bold"
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