const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'EMAIL_LOGIN':
    return {
      ...state, Pessoal: action.payload,
    };
  default: return state;
  }
};

export default reducer;
