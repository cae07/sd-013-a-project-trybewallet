const fetchAPI = async () => {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchCurrencies.json();

  return response;
};

export default fetchAPI;
