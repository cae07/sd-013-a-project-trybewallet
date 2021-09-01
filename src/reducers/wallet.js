// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCESS_RETURN } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCESS_RETURN:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
