// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import
{ SAVE_CURRENCIES, SAVE_EXPENSE, SUCCESS_ACTION, ERROR_ACTION, IS_LOADING_ACTION }
  from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isLoading: false,
  exchangeRates: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: action.payload.currencies, isLoading: false };

  case SUCCESS_ACTION:
    return { ...state, exchangeRates: action.payload.exchangeRates, isLoading: false };

  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload.expense] };

  case IS_LOADING_ACTION:
    return { ...state, isLoading: true };

  case ERROR_ACTION:
    return { ...state, error: true, isLoading: false };

  default:
    return state;
  }
}

export default wallet;
