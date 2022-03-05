import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider, Link } from '@material-ui/core';
import { Menu as MenuIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { links } from './links';
import { useStyles } from './styles';

export const NavigationBar = ({ handleThemeChange }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [leftDrawerState, setLeftDrawerState] = React.useState(false);

  const toggleDrawer = () => {
    setLeftDrawerState(!leftDrawerState);
  };

  const onLinkClick = (target) => {
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }

  return (
    <React.Fragment key={'left'}>
      <Drawer anchor={'left'} open={leftDrawerState} onClose={toggleDrawer}>
        <div
          className={classes.navDrawer}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}>
          <List>
            {links.map((link) => (
              <Link key={link.id} underline="none" onClick={() => onLinkClick(link.url)}>
                <ListItem button key={link.id}>
                  <ListItemText primary={link.text} style={{ color: theme.palette.text.primary }} />
                </ListItem>
                <Divider />
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
      <AppBar style={{ backgroundColor: theme.palette.background.default }} position='fixed' elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.navTitle}>
            Dhrumil Shah
          </Typography>
          <div className={classes.navItems}>
            {links.map((link) => (
              <Button color="inherit" onClick={onLinkClick}>
                <Link key={link.id} underline="none" onClick={() => onLinkClick(link.url)}>
                  <Typography style={{ color: theme.palette.text.primary }}>{link.text}</Typography>
                </Link>
              </Button>
            ))}
          </div>
          <IconButton onClick={handleThemeChange}>
            {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};