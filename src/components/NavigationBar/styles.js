import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navTitle: {
        flexGrow: 1,
        color: "#000000"
    },
    navDrawer: {
        width: 250
    },
    list: {
        width: 250,
    },
    navItems: {
        textTransform: 'capitalize',
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }
}));