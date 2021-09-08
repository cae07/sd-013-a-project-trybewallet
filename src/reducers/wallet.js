import { WALLET_FORM, REQUEST_API, RECEIVE_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, status: action.status };
  case RECEIVE_API:
    return { ...state, currencies: [{ ...action.payload }], status: 'Loaded' };
  case WALLET_FORM:
    return { ...state, expenses: [...state.expenses, { ...action.payload }] };
  default:
    return state;
  }
};

export default wallet;
