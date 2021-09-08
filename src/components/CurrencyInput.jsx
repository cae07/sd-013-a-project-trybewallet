import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class CurrencyInput extends Component {
  render() {
    const { currency, handleChange, currencies, isFetching } = this.props;
    return (
      <label htmlFor="currencies">
        Moeda
        <select
          name="currency"
          id="currencies"
          value={ currency }
          onChange={ (e) => handleChange(e) }
        >
          {isFetching
            ? <Loading />
            : currencies
              .map((currency, index) => <option value={ currency } key={ index }>{ currency }</option>)}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(CurrencyInput);
