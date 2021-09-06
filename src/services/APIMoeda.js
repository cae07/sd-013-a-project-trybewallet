const COIN_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchMoeda = () => (
  fetch(`${COIN_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchMoeda;
