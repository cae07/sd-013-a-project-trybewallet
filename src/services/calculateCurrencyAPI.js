const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencyAPI = (currency) => fetch(`${CURRENCIES_API}`)
  .then((response) => response.json())
  .then((currenciesResponse) => {
    const currencyAsk = Object.fromEntries(
      Object.entries(currenciesResponse)
        .filter(([key]) => (key.includes(currency) && !(key.includes('USDT')))),
    );
    return currencyAsk[currency].ask;
  });

export default fetchCurrencyAPI;
