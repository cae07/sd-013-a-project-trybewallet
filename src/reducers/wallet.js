const initialState = {
  currencies: [],
  expenses: [],
  loading: true,
};

const fechReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LODING':
    return {
      ...state,
      loading: action.payload.loading,
    };
  case 'FETCH_SUCCESS':
    return {
      ...state,
      currencies: action.payload.currency,
      loading: action.payload.loading,
      data: action.payload.data,
    };
  case 'FETCH_ERROR':
    return {
      error: action.payload.error,
      loading: action.payload.loading,
    };
  case 'SAVE_STATE':
    return {
      ...state,
      expenses: [...state.expenses, action.saveState],
    };
  default:
    return state;
  }
};

export default fechReducer;
