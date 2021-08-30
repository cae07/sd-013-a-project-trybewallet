import { combineReducers } from 'redux';

import reducerUser from './user';
import reducerWallet from './wallet';

const rootReducer = combineReducers({ reducerUser, reducerWallet });

export default rootReducer;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
