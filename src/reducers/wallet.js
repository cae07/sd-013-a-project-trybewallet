// importar as variáveis string ref as actions
import {
  REQUEST_API,
  GET_INFO,
  FAILED_REQUEST,
  ADD_EXPENSE,
  DISPLAY_TOTAL_EXPENSES,
} from '../actions';

// declarar o estado inicial do reducer
const initialState = {
  currencies: [],
  expenses: [],
  totalExpensesBRL: 0,
  resultData: {},
  loading: false,
  error: '',
};
// escrever a função pura do reducer (switch case pela chave type)
function walletReducer(state = initialState, action) {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, loading: true };
  case GET_INFO:
    return {
      ...state,
      resultData: action.payload,
      currencies: Object.keys(action.payload),
      loading: false,
    };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, loading: false };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DISPLAY_TOTAL_EXPENSES:
    return { ...state, totalExpensesBRL: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
