const fetchAPI = async () => {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchCurrencies.json();
  const data = await Object.entries(response);
  const filteredData = data.filter(([name]) => name !== 'USDT' && name !== 'DOGE');

  return filteredData;
};

export default fetchAPI;
