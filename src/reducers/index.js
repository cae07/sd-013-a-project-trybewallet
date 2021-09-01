// import { combineReducers } from 'redux';
// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  idExpense: 0,
  totalExpense: 0,
};

/* const calculateTotalExpenses = (expenses) => {
  let totalExp = 0;
  if (expenses.length > 0) {
    expenses.forEach((element) => {
      const { value, currency, exchangeRates } = element;
      totalExp += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });
  }
  return totalExp.toFixed(2);
}; */

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ('LOGIN_VALUE'):
    return {
      ...state,
      user: {
        email: payload.email,
        password: payload.password,
      },
    };
  case ('UPDATE_CURRENCIES'):
    return {
      ...state,
      wallet: {
        currencies: payload,
      },
    };
  case ('ADD_EXPENSE'):
    return {
      ...state,
      idExpense: state.idExpense + 1,
      // totalExpense: calculateTotalExpenses({ ...payload }),
      wallet: {
        expenses:
          {
            id: state.idExpense,
            ...payload,
          },
      },
    };
  default:
    return state;
  }
};

export default reducer;
