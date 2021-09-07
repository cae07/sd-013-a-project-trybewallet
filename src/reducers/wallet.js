const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case '':
    return state;
  default:
    return state;
  }
};

export default wallet;
