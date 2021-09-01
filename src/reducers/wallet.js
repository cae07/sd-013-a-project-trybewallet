// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET_CURRENCIES':
    return { ...state, currencies: action.payload };
  case 'WALLET_EXPENSES':
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
