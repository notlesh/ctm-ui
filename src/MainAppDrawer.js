import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';
import PositionsIcon from '@material-ui/icons/TrendingUp';

import * as Constants from './constants';
import * as Actions from './redux/actions';
import IntroductionPage from './IntroductionPage';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

function MainAppDrawer({appSection, drawerOpen, navChangeSection, navChangeDrawerState}) {
  const classes = useStyles();
  const theme = useTheme();

  let content = null;
  let title = null;

  switch (appSection) {
    case Constants.AppSection.DASHBOARD:
      content = <IntroductionPage />;
      title = "Introduction";
      break;
    case Constants.AppSection.ACCOUNT:
      content = "account (stub)";
      title = "Account";
      break;
    case Constants.AppSection.POSITIONS:
      content = "positions (stub)";
      title = "Positions";
      break;
    default:
      throw "Expected a default value for appSection";
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => navChangeDrawerState(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
        open={drawerOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => navChangeDrawerState(false)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key={Constants.AppSection.DASHBOARD}
            selected={appSection === Constants.AppSection.DASHBOARD}
            onClick={() => navChangeSection(Constants.AppSection.DASHBOARD)}
          >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem
            button
            key={Constants.AppSection.ACCOUNT}
            selected={appSection === Constants.AppSection.ACCOUNT}
            onClick={() => navChangeSection(Constants.AppSection.ACCOUNT)}
          >
            <ListItemIcon><AccountIcon /></ListItemIcon>
            <ListItemText primary="Account Info" />
          </ListItem>

          <ListItem
            button
            key={Constants.AppSection.POSITIONS}
            selected={appSection === Constants.AppSection.POSITIONS}
            onClick={() => navChangeSection(Constants.AppSection.POSITIONS)}
          >
            <ListItemIcon><PositionsIcon /></ListItemIcon>
            <ListItemText primary="Positions" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {content}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appSection: state.ui.appSection,
  drawerOpen: state.ui.drawerOpen,
});

const mapDispatchToProps = {
  navChangeSection: Actions.navChangeSection,
  navChangeDrawerState: Actions.navChangeDrawerState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAppDrawer);
