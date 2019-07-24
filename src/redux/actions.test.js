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

});
