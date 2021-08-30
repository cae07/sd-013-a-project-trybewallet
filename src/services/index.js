// API solicitada no readme de conversão de moedas
const APIURL = 'https://economia.awesomeapi.com.br/json/all';

const currenciesAPI = () => (
  // Faz uma requisição na API
  fetch(APIURL)
    // Quando a API retornar, converte os dados em json
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default currenciesAPI;
