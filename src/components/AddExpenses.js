import React from 'react';
import NoSelectForm from './NoSelectForm';

class AddExpenses extends React.Component {
  render() {
    return (
      <div>
        <NoSelectForm />
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            <option>
              Moedas
            </option>
          </select>
        </label>
        <label htmlFor="select-payment">
          Método de pagamento
          <select id="select-payment">
            <option name="Dinheiro">Dinheiro</option>
            <option name="Credito">Cartão de crédito</option>
            <option name="Debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default AddExpenses;
