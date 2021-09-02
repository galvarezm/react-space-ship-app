import { createStore, combineReducers } from 'redux';
import * as REDUCERS from './reducers';

// reducers
const customReducer = combineReducers({
    globalApp: REDUCERS.globalApp,
    shipList: REDUCERS.shipList,
    shipDetail: REDUCERS.shipDetail,
    pilots: REDUCERS.pilots,
});

// store
const store = createStore(
    customReducer,
);

export default store;
