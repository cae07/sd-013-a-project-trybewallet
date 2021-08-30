import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WalletBody extends Component {
  render() {
    const { value, d, payment, tag, handleChange } = this.props;
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
        <label htmlFor="d">
          Descrição
          <input id="d" type="text" name="d" value={ d } onChange={ handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option value="tst">teste</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="payment" onChange={ handleChange } value={ payment }>
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" tag onChange={ handleChange } value={ tag }>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

WalletBody.propTypes = {
  value: PropTypes.number.isRequired,
  d: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default WalletBody;
