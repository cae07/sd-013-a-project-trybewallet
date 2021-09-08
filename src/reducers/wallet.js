// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = WALLET_STATE, action) {
  switch (action.type) {
  case '':
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
