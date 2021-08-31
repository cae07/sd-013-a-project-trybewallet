import { UPDATE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_CURRENCIES:
    return { ...state, currencies: [...action.payload] };
  default:
    return state;
  }
};

export default wallet;
