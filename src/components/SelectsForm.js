import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectsForm extends Component {
  render() {
    const { currencies, currency, method, tag, onChange } = this.props;
    return (
      <div>
        <label htmlFor="coin">
          Moeda
          <select
            id="coin"
            name="currency"
            value={ currency }
            onChange={ onChange }
          >
            { currencies.map((coin) => <option key={ coin }>{ coin }</option>)}
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento
          <select
            id="pay-method"
            name="method"
            value={ method }
            onChange={ onChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ onChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectsForm.propTypes = {
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    coin: PropTypes.string,
  }).isRequired,
};

export default SelectsForm;
