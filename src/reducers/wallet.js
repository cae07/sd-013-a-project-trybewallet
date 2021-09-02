import { SET_WALLET, REQUEST_API, GET_CURRENCY,
  SET_EXPENSE, REQUEST_FAIL } from '../actions';

const wallets = {
  currencies: [],
  expenses: [],
};

// Feito com ajuda do Rogério.

const wallet = (state = wallets, action) => {
  switch (action.type) {
  case SET_WALLET:
    return { ...state, ...action.state };
  case REQUEST_API:
    return { ...state, ...action.state };
  case GET_CURRENCY:
    return { ...state, currencies: [{ ...action.state }] };
  case SET_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.state] };
  case REQUEST_FAIL:
    return { ...state, statues: action.status };
  default:
    return state;
  }
};

export default wallet;
