// const URL = 'https://economia.awesomeapi.com.br/json/all';
const URL = 'http://localhost:4003/coins';
export const getCoins = () => fetch(URL)
  .then((response) => (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export default getCoins;
