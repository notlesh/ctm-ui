import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';

import * as Constants from '../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const UserList = ({users, requestStatus}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {requestStatus === Constants.RequestStatus.IN_PROGRESS
        && <LinearProgress />
      }

      <List>
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
  requestInProgress: PropTypes.bool,
};

export default UserList;
