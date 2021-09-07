export const INSERT_EMAIL = 'INSERT_EMAIL';
export const INSERT_CURRENCIES = 'INSERT_CURRENCIES';

export const insertEmail = (newEmail) => ({
  type: INSERT_EMAIL,
  payload: newEmail,
});

export const insertCurrencies = (data) => ({
  type: INSERT_CURRENCIES,
  payload: data,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    return dispatch(insertCurrencies(data));
  }
);

// Coloque aqui suas actions
