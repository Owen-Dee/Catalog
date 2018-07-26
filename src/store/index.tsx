import { createStore, applyMiddleware } from '../../node_modules/_redux@4.0.0@redux';
import thunk from '../../node_modules/_redux-thunk@2.3.0@redux-thunk';
import rootReducer from '../reducers/reducers';

import { composeWithDevTools } from '../../node_modules/_redux-devtools-extension@2.13.5@redux-devtools-extension';

const StoreConfig = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
}

const store = StoreConfig();

export default store;