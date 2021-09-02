import { CAMBIO_CHANGE, CONVERT_VALUE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CAMBIO_CHANGE:
    return { ...state, currencies: action.payload };
  case CONVERT_VALUE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
