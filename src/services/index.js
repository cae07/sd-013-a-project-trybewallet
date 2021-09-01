// const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

// export const getCoins = () => {
//   fetch(`${CURRENCY_API}`)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//     ));
// };
// console.log(getCoins())
// export default getCoins;

const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

const getCoins = () => (
  fetch(`${CURRENCY_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
console.log(getCoins());
export default getCoins;
