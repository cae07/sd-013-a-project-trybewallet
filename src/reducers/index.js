import { combineReducers } from 'redux';
import userReducer from './user';
import wallet from './wallet';

const reducer = combineReducers({ userReducer, wallet });

export default reducer;
