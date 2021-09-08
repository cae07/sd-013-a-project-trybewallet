const API_COIN = 'https://economia.awesomeapi.com.br/json/all';

export const ApiCoin = () => (
  fetch(API_COIN)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default ApiCoin;
