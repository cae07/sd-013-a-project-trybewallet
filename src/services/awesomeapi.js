const RATE_API = 'https://economia.awesomeapi.com.br/json/all';

const getRateAPI = () => (
  fetch(RATE_API)
    .then((response) => (
      response
        .json()
        // https://app.betrybe.com/course/live-lectures/sd-cohort-13-b - 38min
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getRateAPI;
