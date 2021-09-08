const fetchApi = async () => {
  const MoedasApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const ApiJson = await MoedasApi.json();
  return ApiJson;
};

export default fetchApi;
