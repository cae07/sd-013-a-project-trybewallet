import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrencyName = this.getCurrencyName.bind(this);
  }

  getCurrencyName(exchangeRates, currency) {
    const { name } = exchangeRates[currency];
    return name.split('/');
  }

  getRate(exchangeRates, currency) {
    const { ask } = exchangeRates[currency];
    return ask;
  }

  getConvertedValue(rate, value) {
    const total = Number(rate) * Number(value);
    const roundedTotal = Math.round((total + Number.EPSILON) * 100) / 100;
    return roundedTotal;
  }

  render() {
    const { expense } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = expense;
    const currenciesNames = this.getCurrencyName(exchangeRates, currency);
    const rate = this.getRate(exchangeRates, currency);
    const convertedValue = this.getConvertedValue(rate, value);
    const currencyName = currenciesNames[0];
    const roundedRate = Math.round((rate) * 100) / 100;
    const roundedValue = value;
    // source: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${roundedValue}`}</td>
        <td>{currencyName}</td>
        <td>{`${roundedRate}`}</td>
        <td>{`${convertedValue}`}</td>
        <td>Real</td>
      </tr>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,

});

// Header.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.object),
// };

export default connect(mapStateToProps)(ContentItem);
