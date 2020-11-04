import { combineReducers } from 'redux';

import counterReducer from './counter';
import isloggedReducer from './islogged';

const allReducers = combineReducers({ counterReducer, isloggedReducer });

export default allReducers;
