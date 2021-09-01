import { CAMBIO_CHANGE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CAMBIO_CHANGE:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
