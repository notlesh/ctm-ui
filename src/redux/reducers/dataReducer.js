import initialState from '../initialState';
import * as Constants from '../../constants';

function dataReducer(state = initialState.data, action) {

  if (action.type === Constants.ActionTypes.DATA_USERS_REQUEST) {
    return Object.assign({}, state,
      { userRequestStatus: Constants.RequestStatus.IN_PROGRESS,
        userRequestMessage: "",
      });

  } else if (action.type === Constants.ActionTypes.DATA_USERS_RECEIVE) {
    return Object.assign({}, state,
      { userRequestStatus: Constants.RequestStatus.SUCCESSFUL,
        userRequestMessage: "",
        users: action.payload,
      });

  } else if (action.type === Constants.ActionTypes.DATA_USERS_FAIL) {
    return Object.assign({}, state,
      { userRequestStatus: Constants.RequestStatus.FAILED,
        userRequestMessage: action.payload.message,
      });

  } else {
    return state;
  }
}

export default dataReducer;

