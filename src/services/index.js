const COIN_API = 'https://economia.awesomeapi.com.br/json/all';

const actionGetCoins = () => (
  fetch(`${COIN_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default actionGetCoins;
