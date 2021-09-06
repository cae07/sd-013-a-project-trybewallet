import {
  GET_COINS,
  GET_COINS_FAIL,
  SAVE_COINS,
  UPDATE_STATE,
  UPDATE_TOTAL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  isLoading: true,
  erro: null,
  total: 0,
};

// const updateTotal = (state) => {
//   const { expenses } = state;
//   return expenses.reduce((acc, { value, exchangeRates, currency }) => (
//     acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
//   ), 0);
// };

const saveCoins = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return ({
      ...state, isLoading: true,
    });
  case SAVE_COINS:
    return ({
      ...state,
      isLoading: false,
      currencies: action.payload,
    });
    //  Auxiliado pelo Gabriel Gaspar turma 13 A
  case UPDATE_STATE:
    return ({
      ...state,
      expenses: [...state.expenses, action.state],
      isLoading: false,
    });
  case UPDATE_TOTAL:
    return {
      ...state,
      total: 187.12,
    };
  case GET_COINS_FAIL:
    return ({
      ...state,
      isLoading: false,
      erro: 'Tente Novamente',
    });
  default:
    return state;
  }
};

export default saveCoins;
