import React, { useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as Constants from '../constants';
import * as Actions from '../redux/actions';

import UserList from '../components/UserList';

const UserManagement = ({userList, usersRequested, usersReceived, usersFailed}) => {

  useEffect(() => {

    // TODO: use middleware or at least organize better

    fetch("http://192.168.2.147:5281/users/")
      .then(response => response.json())
      .then(data => {
        console.log("Got response: ");
        console.log(data);
        usersReceived(data);
      });
      usersRequested();
  });

  return (
    <UserList users={userList} />
  );
}

UserManagement.propTypes = {
  userList: PropTypes.array,
  usersRequested: PropTypes.func,
  usersReceived: PropTypes.func,
  usersFailed: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userList: state.data.users,
});

const mapDispatchToProps = {
  usersRequested: Actions.dataUsersRequest,
  usersReceived: Actions.dataUsersReceive,
  usersFailed: Actions.dataUsersFail,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement);
