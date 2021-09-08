import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchAPI } from '../actions';

class SelectCurrency extends React.Component {
  componentDidMount() {
    const { getCurrencyAPI } = this.props;
    getCurrencyAPI();
  }

  render() {
    const { currencies } = this.props;
    const getCurrencies = Object.keys(currencies);

    return (
      <div>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            {getCurrencies
              .map((item, index) => (
                item !== 'USDT' && <option value={ item } key={ index }>{item}</option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyAPI: () => dispatch(fetchAPI()),
});

SelectCurrency.propTypes = {
  getCurrencyAPI: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
