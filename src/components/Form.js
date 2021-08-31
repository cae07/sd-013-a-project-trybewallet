import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            <option>Real</option>
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento
          <select id="pay-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

// Form.propTypes = {

// };

export default Form;
