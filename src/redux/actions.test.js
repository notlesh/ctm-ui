import * as Actions from './actions';
import * as Constants from '../constants';

describe("redux actions", () => {
  it("should create nav change action", () => {
    const expectedAction = {
      type: Constants.ActionTypes.NAV_CHANGE_SECTION,
      group: Constants.ActionGroups.UI,
      appSection: "input",
    };

    expect(Actions.navChangeSection("input")).toEqual(expectedAction);
  });

  it("should create drawer state change action", () => {
    const expectedAction = {
      type: Constants.ActionTypes.NAV_CHANGE_DRAWER,
      group: Constants.ActionGroups.UI,
      drawerOpen: false,
    };

    expect(Actions.navChangeDrawerState(false)).toEqual(expectedAction);
  });

  it("should create users request action", () => {
    const expectedAction = {
      type: Constants.ActionTypes.DATA_USERS_REQUEST,
      group: Constants.ActionGroups.DATA,
    };

    expect(Actions.dataUsersRequest()).toEqual(expectedAction);
  });

  it("should create users received action", () => {
    const expectedAction = {
      type: Constants.ActionTypes.DATA_USERS_RECEIVE,
      group: Constants.ActionGroups.DATA,
      users: "input",
    };

    expect(Actions.dataUsersReceive("input")).toEqual(expectedAction);
  });

  it("should create users fail action", () => {
    const expectedAction = {
      type: Constants.ActionTypes.DATA_USERS_FAIL,
      group: Constants.ActionGroups.DATA,
      reason: "oops",
    };

    expect(Actions.dataUsersFail("oops")).toEqual(expectedAction);
  });

});
