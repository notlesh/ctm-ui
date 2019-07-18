import uiReducer  from './uiReducer';
import * as Constants from '../../constants';
import * as Actions from '../actions';

describe("reducers", () => {
  describe("uiReducer", () => {

    it("should return initial state", () => {
      expect(uiReducer(undefined, {})).toEqual(
        {
          drawerOpen: true,
          appSection: Constants.AppSection.DASHBOARD,
        }
      );
    });

    it("should handle NAV_CHANGE_SECTION", () => {
      expect(uiReducer({}, Actions.navChangeSection("TEST_SECTION"))).toEqual(
        {
          appSection: "TEST_SECTION",
        }
      );
    });

    it("should handle NAV_CHANGE_DRAWER", () => {
      expect(uiReducer({}, Actions.navChangeDrawerState(true))).toEqual(
        {
          drawerOpen: true,
        }
      );
    });

  });
});
