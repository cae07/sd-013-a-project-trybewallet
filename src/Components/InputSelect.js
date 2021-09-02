import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputSelect extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <>
        <div>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
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
      </>
    );
  }
}

InputSelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InputSelect;
