import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// const INITIAL_STATE = {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: [],
//   },
// };

const rootReducer = combineReducers({
  userReducer,
  walletReducer,
});

export default rootReducer;
