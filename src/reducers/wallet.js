// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { /* WALLET */REQUEST_API, API_FAIL, API_SUCESS } from '../actions';

const INITIAL = {
  currencies: [],
  expenses: [],
  loading: true,
};

const wallet = (state = INITIAL, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  case API_SUCESS:
    return {
      ...state,
      currencies: [...action.payload],
      loading: false,
    };
  case API_FAIL:
    return {
      ...state,
      loading: false,
      erro: action.erromsg,
    };
  default:
    return state;
  }
};

export default wallet;
