const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idExpense: 0,
  totalExpense: 0,
};

const calculateTotalExpenses = (expenses) => {
  let totalExp = 0;
  if (expenses.length > 0) {
    expenses.forEach((element) => {
      const { value, currency, exchangeRates } = element;
      totalExp += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });
  }
  return totalExp.toFixed(2);
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ('UPDATE_CURRENCIES'):
    return {
      ...state,
      currencies: action.payload,
    };
  case ('ADD_EXPENSE'):
    return {
      ...state,
      idExpense: state.idExpense + 1,
      totalExpense: calculateTotalExpenses(
        [...state.expenses, { id: state.idExpense, ...action.payload },
        ],
      ),
      expenses:
        [...state.expenses,
          {
            id: state.idExpense,
            ...action.payload,
          },
        ],
    };
  default:
    return state;
  }
};

export default wallet;
