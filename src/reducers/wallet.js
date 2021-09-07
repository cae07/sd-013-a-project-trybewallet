import { API_SUCESS, API_ERROR, GET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  erro: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCESS:
    return ({
      ...state, currencies: [...action.payload],
    });
  case API_ERROR:
    return ({
      ...state, erro: action.error,
    });
  case GET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, { ...action.expense, exchangeRates: action.data }] };
  default: return state;
  }
};

export default wallet;

// Créditos ao código do Matheus Macedo
