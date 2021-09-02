

export const getCurrencesCambio = () => {
  fetch(`${CURRENCES_API}`)
    .then((response) => response.json()
      .then((result) => (result)));
};

export default getCurrencesCambio;
