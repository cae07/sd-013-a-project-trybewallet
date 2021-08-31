import { combineReducers } from 'redux';
import reducerUser from './user';
// import reducerWallet from './wallet';

const rootReducer = combineReducers({ reducerUser });

export default rootReducer;
