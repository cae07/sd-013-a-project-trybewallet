import { CURRENCIES_FETCHED } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCIES_FETCHED: {
    return {
      currencies: [...state.currencies, ...action.payload],
      expenses: [...state.expenses],
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
