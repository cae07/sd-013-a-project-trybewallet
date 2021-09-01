const getCoins = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response
        .json()
        .then((data) => data)
    ))
);

export default getCoins;
