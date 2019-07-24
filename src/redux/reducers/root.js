import { combineReducers } from 'redux';

import uiReducer from './uiReducer';
import dataReducer from './dataReducer';

export default combineReducers({ui: uiReducer, data: dataReducer});

