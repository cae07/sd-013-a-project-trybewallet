// Esse reducer será responsável por tratar as informações da Wallet

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [0],
  coins: [],
};

function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case 'ADD_COINS':
    return { ...state, currencies: [...action.payload] };
  default:
    return state;
  }
}

export default wallet;
