import * as Constants from '../constants';

export const navChangeSection = appSection => ({
	type: Constants.ActionTypes.NAV_CHANGE_SECTION,
	group: Constants.ActionGroups.UI,
	appSection
})

export const navChangeDrawerState = drawerOpen => ({
	type: Constants.ActionTypes.NAV_CHANGE_DRAWER,
	group: Constants.ActionGroups.UI,
	drawerOpen
})

