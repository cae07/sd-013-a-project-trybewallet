import React from 'react';

class InputsWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            id="payment"
            name="payment"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </form>
    );
  }
}

export default InputsWallet;
