import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';

import rootReducer from './reducers/root';


const store = createStore(
  rootReducer,
  applyMiddleware(logger, apiMiddleware)
);
export default store;

