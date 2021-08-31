// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class CurrencySelect extends Component {
  render() {
    const { props: { currencies, handleChange, defaultValue } } = this;
    return (
      <label htmlFor="currency-select">
        Moeda
        <select
          name="currency"
          id="currency-select"
          onChange={ (evt) => handleChange(evt) }
          defaultValue={ defaultValue }
        >
          {
            currencies.map((code) => (
              <option
                key={ code }
                value={ code }
              >
                { code }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(CurrencySelect);
