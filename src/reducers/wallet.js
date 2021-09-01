// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { LOADING_TYPE, CURRENCY_TYPE, ERROR_TYPE, ADD_EXPENSE } from '../actions';
import { CURRENCY_TYPE, ERROR_TYPE, ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  loading: false,
  error: '',
};

function wallet(state = initialState, action) {
  switch (action.type) {
  // case LOADING_TYPE:
  //   return { ...state, loading: true };
  case CURRENCY_TYPE:
    return { ...state, currencies: action.payload, error: '' };
  case ERROR_TYPE:
    return { ...state, error: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, { ...action.payload }], error: '' };
  default:
    return state;
  }
}

export default wallet;

// Construção do ADD_EXPENSE pega do repositório do Gabriel Gaspar
