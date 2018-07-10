import { createStore } from 'redux';
import rootReducer from '../reducers';

const StoreConfig = () => {
    return createStore(
        rootReducer
    );
}

export default StoreConfig;