import { combineReducers } from 'redux';
import reducerUser from './user';
import reducerWallet from './wallet';

const rootReducer = combineReducers({ user: reducerUser, reducerWallet });

export default rootReducer;
