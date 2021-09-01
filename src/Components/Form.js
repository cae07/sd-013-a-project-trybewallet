import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <div>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
        </div>
        <div>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              <option value="currency">oi</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="payment">Dinheiro</option>
              <option value="payment">Cartão de crédito</option>
              <option value="payment">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="category">
            Tag
            <select name="category" id="category">
              <option value="category">Alimentação</option>
              <option value="category">Lazer</option>
              <option value="category">Trabalho</option>
              <option value="category">Transporte</option>
              <option value="category">Saúde</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

export default Form;
