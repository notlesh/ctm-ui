import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ApiActions from '../redux/api-actions';
import * as Constants from '../constants';

import UserList from '../components/UserList';

const UserManagement = ({ userList, requestStatus, requestUsers }) => {

  useEffect(() => {
    requestUsers();
    const timer = window.setInterval(() => {
      requestUsers();
    }, 60000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <UserList users={userList} requestStatus={requestStatus} />
  );
}

UserManagement.propTypes = {
  userList: PropTypes.array,
  requestUsers: PropTypes.oneOf(Object.values(Constants.RequestStatus)),
};

const mapStateToProps = (state) => ({
  userList: state.data.users,
  requestStatus: state.data.userRequestStatus,
});

const mapDispatchToProps = {
  requestUsers: ApiActions.dataUsersRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement);
