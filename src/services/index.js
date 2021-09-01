const ECONOMIA_API = 'https://economia.awesomeapi.com.br';

export const getCoins = () => (
  fetch(`${ECONOMIA_API}/json/all`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCoins;
