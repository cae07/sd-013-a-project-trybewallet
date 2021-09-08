import React from 'react';

class SelectPayment extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="select-payment">
          Método de pagamento
          <select id="select-payment">
            <option name="Dinheiro">Dinheiro</option>
            <option name="Credito">Cartão de crédito</option>
            <option name="Debito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectPayment;
