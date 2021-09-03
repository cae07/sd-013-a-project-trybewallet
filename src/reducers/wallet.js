const INITIAL_STATE = {
  expenses: [],
  total: 0,
  id: -1,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EXPENSE':
    return {
      ...state,
      id: state.id + 1,
      total: state.total + parseFloat(action.total),
      expenses: [
        ...state.expenses,
        {
          id: state.id + 1,
          ...action.expense,
        },
      ],
    };

  default:
    return state;
  }
};

export default walletReducer;
