import React from 'react';
import PropTypes from 'prop-types';
import SelectWallet from './SelectWallet';

class SelectGroup extends React.Component {
  render() {
    const { handleChange, currency, payment, tag, propCurrencies } = this.props;
    return (
      <>
        <SelectWallet
          label="Moeda"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ handleChange }
        >
          {
            propCurrencies.map((item, index) => <option key={ index }>{item}</option>)
          }
        </SelectWallet>
        <SelectWallet
          label="Método de pagamento"
          name="payment"
          id="payment"
          value={ payment }
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </SelectWallet>
        <SelectWallet
          label="Tag"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </SelectWallet>
      </>
    );
  }
}

SelectGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  propCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectGroup;

// https://github.com/facebook/prop-types/issues/212
