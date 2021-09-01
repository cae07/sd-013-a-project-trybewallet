const fetchCurrencies = async () => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  const data = await response.json();
  delete data.USDT;
  delete data.DOGE;
  return data;
};

export default fetchCurrencies;
