import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
import AdminIcon from '@material-ui/icons/PermIdentity';

import * as Constants from '../constants';
import IntroductionPage from './IntroductionPage';
import AdminPage from '../containers/AdminPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
);

const UserList = ({users}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <List className={classes.root}>
        {users.map(user =>
          <ListItem>
            <ListItemText key={user._id} primary={user.username} />
          </ListItem>
        )}
      </List>
    </div>
  );
}

UserList.propTypes ={
  users: PropTypes.array,
};

export default UserList;
