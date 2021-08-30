// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default: return state;
  }
}

export default walletReducer;
