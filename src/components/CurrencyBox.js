import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyBox extends Component {
  render() {
    const { currencies, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency" onChange={ handleChange }>
          { currencies && Object.keys(currencies)
            .map((key, index) => {
              if (key !== 'USDT') {
                return <option key={ index }>{ key }</option>;
              }
              return null;
            })}
        </select>
      </label>
    );
  }
}

CurrencyBox.defaultProps = {
  currencies: [],
};

CurrencyBox.propTypes = {
  currencies: PropTypes.shape(
    {},
  ),
  handleChange: PropTypes.func.isRequired,
};

export default CurrencyBox;
