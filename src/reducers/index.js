import { combineReducers } from 'redux';
import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({ user });

export default rootReducer;
/* const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { state: action.user };
  default:
    return state;
  }
}

export default myReducer; */
