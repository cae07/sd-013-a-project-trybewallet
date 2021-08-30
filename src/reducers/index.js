import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({ userReducer, walletReducer });
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

export default rootReducer;
