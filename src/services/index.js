const API = 'https://economia.awesomeapi.com.br/json/all';

const serviceAPI = () => (
  fetch(API)
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default serviceAPI;
