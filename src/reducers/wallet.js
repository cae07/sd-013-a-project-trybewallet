import { GET_MOEDA_API } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_MOEDA_API:
    return ({
      ...state, currencies: action.json,
    });
  default: return state;
  }
};

export default wallet;
