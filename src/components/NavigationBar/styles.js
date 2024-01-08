import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    },
    navTitle: {
        flexGrow: 1,
        color: theme.palette.text.primary
    },
    navDrawer: {
        width: 250
    },
    list: {
        width: 250,
    },
    navItems: {
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }
}));