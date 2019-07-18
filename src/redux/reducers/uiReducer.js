import initialState from '../initialState';
import * as Constants from '../../constants';

function uiReducer(state = initialState.ui, action) {
  if (action.type === Constants.ActionTypes.NAV_CHANGE_SECTION) {
    return Object.assign({}, state,
      { appSection: action.appSection });
  } else if (action.type === Constants.ActionTypes.NAV_CHANGE_DRAWER) {
    return Object.assign({}, state,
      { drawerOpen: action.drawerOpen });
  } else {
    return state;
  }
}

export default uiReducer;

