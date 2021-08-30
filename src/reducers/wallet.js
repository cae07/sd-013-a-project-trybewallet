// Esse reducer será responsável por tratar as informações da Wallet

const INITIAL_STATE_WALLET = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function ReducerWallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case 'ADD_WALLET':
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
}

export default ReducerWallet;
