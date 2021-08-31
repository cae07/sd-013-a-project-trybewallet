const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case '':
    return {
      ...state, wallet: action.payload,
    };
  default: return state;
  }
};
export default reducerWallet;
