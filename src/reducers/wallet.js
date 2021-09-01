import { WALLET_NAME } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_NAME: 
    return { ...state, user: action.payload }
  default:
    return state;
  }
};

export default walletReducer;
