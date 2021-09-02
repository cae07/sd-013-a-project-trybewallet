import { combineReducers } from 'redux';
import reducerUser from './user';
import reducerWallet from './wallet';

const rootReducer = combineReducers({ user: reducerUser, wallet: reducerWallet });

export default rootReducer;
