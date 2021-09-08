import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class InputSelect extends Component {
  render() {
    const { currencies, onChange } = this.props;
    return (
      <>
        <div>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency" onChange={ onChange }>
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="method">
            Método de pagamento
            <select name="method" id="method" onChange={ onChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag" onChange={ onChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
      </>
    );
  }
}

InputSelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export const ConnectedInputSelect = connect(mapStateToProps)(InputSelect);
