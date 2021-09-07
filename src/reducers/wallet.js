// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE, FINISH_FETCH, START_FETCH } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  currencyList: {},
  expenses: [],
  nextId: 0,
  totalAmount: 0,
};

const sumEveryExpense = (expenses) => {
  let total = 0;
  if (expenses.length > 0 && expenses) {
    expenses.forEach((expense) => {
      const { currency, value, exchangeRates } = expense;
      total += Number(value) * Number(exchangeRates[currency].ask);
    });
  }
  return total;
};

let idNumber = 0;

const wallet = (state = INITIAL_STATE, action) => {
  const { type, currencyList, expense } = action;
  switch (type) {
  case START_FETCH:
    return {
      ...state,
      loading: true,
    };

  case FINISH_FETCH:
    return {
      ...state,
      loading: false,
      currencyList,
    };

  case ADD_EXPENSE:
    idNumber += 1;
    return {
      ...state,
      expenses: [...state.expenses, expense],
      nextId: idNumber,
      totalAmount: sumEveryExpense([...state.expenses, expense]),
    };

  default:
    return state;
  }
};

export default wallet;
