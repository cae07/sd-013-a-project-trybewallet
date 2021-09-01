// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import INITIAL_STATE from '../helpers/initialState';
import { GET_CURRENCIES, FAILED_REQUEST } from '../actions';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case FAILED_REQUEST:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default wallet;
