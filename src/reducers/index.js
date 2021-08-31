import { combineReducers } from 'redux';
import { userLogin } from './user';
// import wallet from './wallet';

const rootReducer = combineReducers({
  userLogin,
});

export default rootReducer;
