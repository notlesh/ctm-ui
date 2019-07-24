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

export const dataUsersRequest = () => ({
	type: Constants.ActionTypes.DATA_USERS_REQUEST,
	group: Constants.ActionGroups.DATA,
})
export const dataUsersReceive = users => ({
	type: Constants.ActionTypes.DATA_USERS_RECEIVE,
	group: Constants.ActionGroups.DATA,
	users
})
export const dataUsersFail = reason => ({
	type: Constants.ActionTypes.DATA_USERS_FAIL,
	group: Constants.ActionGroups.DATA,
	reason
})
