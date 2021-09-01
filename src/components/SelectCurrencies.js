import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { thunkCurrencies } from '../actions';

class SelectCurrencies extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies, loading, currency, onChange } = this.props;
    const currencySymbols = Object.keys(currencies);
    const newcurrencySymbols = currencySymbols.filter((el) => el !== 'USDT');
    const selectComponent = (
      <label
        htmlFor="select"
      >
        Moeda
        <select
          id="select"
          name="currency"
          value={ currency }
          onChange={ onChange }
        >
          {newcurrencySymbols.map((symbol, index) => (
            <option
              key={ index }
              value={ symbol }
            >
              {symbol}
            </option>
          ))}
        </select>
      </label>
    );
    return (
      !loading && selectComponent
    );
  }
}

SelectCurrencies.propTypes = {
  currencies: PropTypes.shape({
    code: PropTypes.string,
    codein: PropTypes.string,
    name: PropTypes.string,
    high: PropTypes.number,
    low: PropTypes.number,
    varBid: PropTypes.number,
    pctChange: PropTypes.number,
    bid: PropTypes.number,
    ask: PropTypes.number,
    timestamp: PropTypes.number,
    create_date: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currency: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectCurrencies.defaultProps = {
  currency: undefined,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(thunkCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrencies);
