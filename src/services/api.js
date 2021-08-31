const fetchAPI = async () => {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchCurrencies.json();
  const data = await Object.entries(response);
  const filteredData = data.filter((([name]) => name !== 'USDT' && name !== 'DOGE'));
  const newResponse = {};
  filteredData.forEach(([name, detailObject]) => {
    newResponse[name] = detailObject;
  });
  return newResponse;
};

export default fetchAPI;
