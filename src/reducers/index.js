import { combineReducers } from 'redux';
import user from './user';
// import reducerWallet from './wallet';

const rootReducer = combineReducers({ user });

export default rootReducer;
