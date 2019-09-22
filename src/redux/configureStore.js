import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import tipReducer from './tipDuck.js';

const middleware = applyMiddleware(logger);

const configureStore= createStore(
  tipReducer,
  middleware
);


export default configureStore;