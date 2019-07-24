import dataReducer  from './dataReducer';
import * as Constants from '../../constants';
import * as Actions from '../actions';

describe("reducers", () => {
  describe("dataReducer", () => {

    it("should return initial state", () => {
      expect(dataReducer(undefined, {})).toEqual(
        {
          users: [],
          userRequestStatus: Constants.RequestStatus.SUCCESSFUL,
          userRequestMessage: "",
        }
      );
    });

    it("should handle DATA_USERS_REQUEST", () => {
      // actions here are normally emitted by redux-api-middleware
      const action = {
        type: Constants.ActionTypes.DATA_USERS_REQUEST,
      };
      expect(dataReducer({}, action)).toEqual(
        {
          userRequestStatus: Constants.RequestStatus.IN_PROGRESS,
          userRequestMessage: "",
        }
      );
    });

    it("should handle DATA_USERS_RECEIVE", () => {
      // actions here are normally emitted by redux-api-middleware
      const action = {
        type: Constants.ActionTypes.DATA_USERS_RECEIVE,
        payload: "users-payload",
      };
      expect(dataReducer({}, action)).toEqual(
        {
          userRequestStatus: Constants.RequestStatus.SUCCESSFUL,
          userRequestMessage: "",
          users: "users-payload",
        }
      );
    });

    it("should handle DATA_USERS_FAIL", () => {
      // actions here are normally emitted by redux-api-middleware
      const action = {
        type: Constants.ActionTypes.DATA_USERS_FAIL,
        payload: { message: "500 - oops" },
      };
      expect(dataReducer({}, action)).toEqual(
        {
          userRequestStatus: Constants.RequestStatus.FAILED,
          userRequestMessage: "500 - oops",
        }
      );
    });

  });
});
