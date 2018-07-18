import { combineReducers } from 'redux';

import { enthusiasm } from './demo';
import { changeCatalogType } from './catalog';

const rootReducer = combineReducers({
	demo: enthusiasm,
	catalog: changeCatalogType
});

export default rootReducer;