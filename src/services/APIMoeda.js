const fetchMoeda = () => {
  fetch(' https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)));
};

export default fetchMoeda;
