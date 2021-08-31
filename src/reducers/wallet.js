const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'WALLET_ACT':
    return { ...state, user: action.state };
  default:
    return state;
  }
};

export default wallet;
