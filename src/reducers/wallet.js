import {
  GET_MOEDA,
  REQUEST_MOEDAAPI,
  ERROR_REQUEST_MOEDA,
  ADD_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: '',
  expenseId: 0,
  totalExpenses: 0,
};
function totalExpenses(expenses) {
  let total = 0;
  if (expenses.length > 0 && expenses) {
    expenses.forEach((expense) => {
      const { currency, value, exchangeRates } = expense;
      total += Number(value) * Number(exchangeRates[currency].ask);
    });
  }
  return total;
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_MOEDAAPI:
    return {
      ...state,
      loading: true,
    };
  case GET_MOEDA:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case ERROR_REQUEST_MOEDA:
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenseId: state.expenseId + 1,
      expenses: state.expenses.concat({
        ...action.payload,
        id: state.expenseId,
      }),
      totalExpenses: totalExpenses(state.expenses.concat({
        ...action.payload,
        id: state.expenseId,
      })),
    };
  default:
    return state;
  }
};

export default wallet;

// Requisito 7 foi resolvido com a GRANDE ajuda do Vinicius Dyonisio em salas de estudos, e em mensagens privadas no slack.
