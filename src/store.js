import { combineReducers, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

const REDUCERS = combineReducers(reducers);
const MIDDLEWARE = applyMiddleware(promise(), thunk);

export default createStore(REDUCERS, MIDDLEWARE);
