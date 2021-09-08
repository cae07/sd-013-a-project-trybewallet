const fetchApi = async () => {
  const fetcc = await fetch('https://economia.awesomeapi.com.br/json/all');
  if (!fetcc.ok) {
    console.log('nao deu');
  }
  const result = await fetcc.json();
  console.log(result);
  return result;
};

export default fetchApi;
