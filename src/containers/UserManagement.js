import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as ApiActions from '../redux/api-actions';

import UserList from '../components/UserList';

const UserManagement = ({ userList, requestUsers }) => {

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div>
    {userList.length == 0
      ? <CircularProgress />
      : <UserList users={userList} />
    }
    </div>
  );
}

UserManagement.propTypes = {
  userList: PropTypes.array,
  requestUsers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userList: state.data.users,
});

const mapDispatchToProps = {
  requestUsers: ApiActions.dataUsersRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement);
