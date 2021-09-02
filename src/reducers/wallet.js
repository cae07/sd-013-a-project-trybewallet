// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCESS_RETURN, SAVE_EXPENSES } from '../actions';

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
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.payload.value,
          description: action.payload.description,
          currency: action.payload.currency,
          method: action.payload.method,
          tag: action.payload.tag,
          exchangeRates: {
            ...action.dataAPI,
          },
        },
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
