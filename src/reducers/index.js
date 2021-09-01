import { combineReducers } from 'redux';
import wallet from './wallet';
import user from './user';

const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
