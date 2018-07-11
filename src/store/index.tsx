import { createStore } from 'redux';
import rootReducer from '../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const StoreConfig = () => {
    return createStore(
        rootReducer,
        composeWithDevTools()
    );
}

export default StoreConfig;