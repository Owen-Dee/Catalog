import { combineReducers } from 'redux';

import { enthusiasm } from './reducer/demo';

const rootReducer = combineReducers({
	demo: enthusiasm
});

export default rootReducer;