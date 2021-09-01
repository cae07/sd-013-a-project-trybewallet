import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyBox extends Component {
  render() {
    const { currencies, handleChange, value = '' } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          onChange={ handleChange }
          defaultValue={ value }
        >
          { currencies && currencies
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
  value: undefined,
};

CurrencyBox.propTypes = {
  currencies: PropTypes.oneOfType(
    [PropTypes.objectOf(PropTypes.object), PropTypes.array],
  ),
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default CurrencyBox;
