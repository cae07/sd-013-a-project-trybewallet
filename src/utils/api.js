const fetchApi = async () => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const apiJson = await api.json();

  return apiJson;
};

export default fetchApi;
