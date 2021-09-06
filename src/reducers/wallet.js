import { ACTION_REQUEST_START,
  ACTION_REQUEST_SUCCESS, ACTION_REQUEST_FAIL, SEND_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTION_REQUEST_START:
    return { ...state, isLoading: true };

  case ACTION_REQUEST_SUCCESS:
    return { ...state,
      isLoading: false,
      currencies: [...Object.values(action.currencies)],
    };

  case ACTION_REQUEST_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error.message,
    };

  case SEND_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default:
    return state;
  }
}

export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
