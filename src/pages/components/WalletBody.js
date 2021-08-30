import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WalletBody extends Component {
  render() {
    const { value, description, payment, tag, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <select>
          Moeda
        </select>
        <select name="payment" onChange={ handleChange } value={ payment }>
          Método de pagamento
          <option value="cash">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
        <select name="tag" tag onChange={ handleChange } value={ tag }>
          Tag:
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transportation">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </fieldset>
    );
  }
}

WalletBody.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default WalletBody;
