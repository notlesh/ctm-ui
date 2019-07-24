import * as Constants from '../constants.js';

/**
 * Keeping the entire app state in this object serves several purposes:
 * 1) it clearly shows what the redux state tree looks like (no guesswork)
 * 2) it allows reducers to provide initial state when first called
 * 3) it collects default values in one place
 */
const initialState = {
  // UI state: all state specific to the UI's current rendering
  ui: {
    drawerOpen: true,
    appSection: Constants.AppSection.DASHBOARD,
  },

  data: {
    users: [],
    userRequestStatus: Constants.RequestStatus.SUCCESSFUL,
    userRequestMessage: "",
  },
  
};

export default initialState;

