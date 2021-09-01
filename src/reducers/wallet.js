import { LOADING_COIN, SUCCESS_COIN, ERROR_COIN, SEND_EXPENSES } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loadingCurrency: false,
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING_COIN:
    return { ...state, loadingCurrency: true };
  case SUCCESS_COIN:
    return { ...state, currencies: action.payload };
  case ERROR_COIN:
    return { ...state, error: action.error.message };
  default: return state;
  case SEND_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload] };
  }
}

export default reducer;
