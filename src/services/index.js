// Código retirado de https://github.com/tryber/sd-013-a-project-trybewallet/blob/5621435da9ce052d49cb4331f9f1dabcf4bbc975/src/services/index.js#L4
// Minha fetch estava dentro da action e estava tendo problemas em
// diferenciar a chamada para preencher os selects e para pegar as cotações
// usando esse método separado posso fazer os dois

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
