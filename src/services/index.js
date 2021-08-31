const APIURL = 'https://economia.awesomeapi.com.br/json/all';

const currencyAPI = () => {
  fetch(`${APIURL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
};

export default currencyAPI;
