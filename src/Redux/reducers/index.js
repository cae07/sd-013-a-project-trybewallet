import { combineReducers } from 'redux';
import ReducerUser from './user';
import ReducerWallet from './wallet';

const rootReducer = combineReducers({ ReducerUser, ReducerWallet });

export default rootReducer;
