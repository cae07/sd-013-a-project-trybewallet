import React from 'react';
import PropTypes from 'prop-types';

class CurrencySelected extends React.Component {
  render() {
    const { handleChange, value = '', loading, currencyList = [] } = this.props;
    if (loading) {
      return (
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            defaultValue={ value }
            onChange={ handleChange }
          >
            <option>Carregando...</option>
          </select>
        </label>
      );
    }
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          defaultValue={ value }
          onChange={ handleChange }
        >
          <option value="" disabled selected>Escolha</option>
          {
            Object.keys(currencyList)
              .map((currency, index) => {
                if (currency !== 'USDT') {
                  return <option key={ index }>{ currency }</option>;
                }
                return null;
              })
          }
        </select>
      </label>
    );
  }
}

CurrencySelected.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  currencyList: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CurrencySelected;
