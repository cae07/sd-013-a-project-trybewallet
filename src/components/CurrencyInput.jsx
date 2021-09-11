import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading';

class CurrencyInput extends Component {
  render() {
    const { currencyValue, handleChange, currencies, isFetching } = this.props;
    return (
      <label htmlFor="currencies">
        Moeda
        <select
          name="currency"
          id="currencies"
          value={ currencyValue }
          onChange={ (e) => handleChange(e) }
        >
          {isFetching
            ? <Loading />
            : currencies.map((exchange, index) => (
              <option value={ exchange } key={ index }>{ exchange }</option>))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.isFetching,
});

CurrencyInput.propTypes = {
  currencyValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  isFetching: false,
};

export default connect(mapStateToProps)(CurrencyInput);
