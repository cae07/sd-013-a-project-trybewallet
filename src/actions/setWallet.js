const urlApi = 'https://economia.awesomeapi.com.br/json/all';

export const update = (payload) => (
  {
    type: 'UPDATE_CURRENCIES', payload,
  }
);

export const addExpense = (payload) => (
  {
    type: 'ADD_EXPENSE', payload,
  }
);

export const fetchGetCurrencies = () => (dispatch) => {
  const json = fetch(urlApi).then((res) => res.json());
  return json.then((elements) => dispatch(update(elements)));
};

export const fetchAddExpense = (payload) => (dispatch) => {
  const json = fetch(urlApi).then((res) => res.json());
  json.then((data) => {
    delete data.USDT;
    const expense = {
      ...payload,
      exchangeRates: [data],
    };
    dispatch(addExpense(expense));
  });
};
