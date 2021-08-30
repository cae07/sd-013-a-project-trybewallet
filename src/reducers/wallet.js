// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default reducer;
