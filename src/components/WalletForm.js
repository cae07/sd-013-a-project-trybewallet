import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class WalletForm extends Component {
  render() {
    const { currencies, handleSubmit } = this.props;

    return (
      <form onSubmit={ (event) => handleSubmit(event) } id="test">
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            {Object.values(currencies)
              .filter((currency) => currency.codein !== 'BRLT')
              .map((currency) => (
                <option key={ currency.code } value={ currency.code }>
                  { currency.code }
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currencies: PropTypes.number.isRequired,
};
