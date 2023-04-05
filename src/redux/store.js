import {legacy_createStore, combineReducers} from 'redux';
import initialState from './initialState';

const subreducers = {
};

const reducer = combineReducers(subreducers);
const store = legacy_createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;