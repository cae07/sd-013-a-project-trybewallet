const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchURL = async () => {
  const result = await fetch(URL);
  return result.json();
};

export default fetchURL;
