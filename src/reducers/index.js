import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({
  user, // userReducer
  wallet, // walletReducer
});

export default rootReducer;
