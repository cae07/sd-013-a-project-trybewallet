import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './user';
// import wallet from './wallet';

export const rootReducer = combineReducers({ user });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
