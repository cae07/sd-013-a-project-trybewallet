const INITIAL_STATE = {
  expenses: [],
  currencies: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'currencies':
    return { ...state, currencies: action.state };
  case 'exchangeRates':
    return { ...state, expenses: [...state.expenses, action.state] };
  default:
    return state;
  }
};

export default wallet;
