import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const reducerGl = combineReducers({ user, wallet });

export default reducerGl;
