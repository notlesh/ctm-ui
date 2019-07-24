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
      expect(dataReducer({}, Actions.dataUsersRequest())).toEqual(
        {
          userRequestStatus: Constants.RequestStatus.IN_PROGRESS,
          userRequestMessage: "",
        }
      );
    });

    it("should handle DATA_USERS_RECEIVE", () => {
      expect(dataReducer({}, Actions.dataUsersReceive("users"))).toEqual(
        {
          userRequestStatus: Constants.RequestStatus.SUCCESSFUL,
          userRequestMessage: "",
          users: "users",
        }
      );
    });

    it("should handle DATA_USERS_FAIL", () => {
      expect(dataReducer({}, Actions.dataUsersFail("oops"))).toEqual(
        {
          userRequestStatus: Constants.RequestStatus.FAILED,
          userRequestMessage: "oops",
        }
      );
    });

  });
});
