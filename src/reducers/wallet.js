// Esse reducer será responsável por tratar as informações da Wallet

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  coins: [],
};

function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.payload] };
  case 'ADD_API_RESPONSE':
    return { ...state, currencies: Object.keys(action.payload) };
  default:
    return state;
  }
}

export default wallet;
