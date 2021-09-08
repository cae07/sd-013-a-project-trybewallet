const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencyAPI = (currency) => fetch(`${CURRENCIES_API}`)
  .then((response) => response.json())
  .then((currenciesResponse) => {
    delete currenciesResponse.USDT;
    const currencyAsk = currenciesResponse;
    return currencyAsk[currency].ask;
  });

export default fetchCurrencyAPI;
