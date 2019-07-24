import { RSAA } from 'redux-api-middleware';

import * as Constants from '../constants';

export const dataUsersRequest = () => ({
	[RSAA]: {
		endpoint: Constants.SERVER_HOST + '/users/',
		method: 'GET',
		types: [
			Constants.ActionTypes.DATA_USERS_REQUEST,
			Constants.ActionTypes.DATA_USERS_RECEIVE,
			Constants.ActionTypes.DATA_USERS_FAIL,
		],
	}
});
