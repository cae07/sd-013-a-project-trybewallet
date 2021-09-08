import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchApiThunk } from '../actions';

class Coin extends React.Component {
  componentDidMount() {
    const { ApiCoin } = this.props;
    ApiCoin();
  }

  render() {
    const { currency, handleChange, currencies } = this.props;
    const getCurrenciesArray = Object.keys(currencies);
    return (
      <div>
        <label htmlFor="coin">
          Moeda
          <select
            required="required"
            id="coin"
            name="currency"
            onChange={ handleChange }
            value={ currency }
          >
            {getCurrenciesArray
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
  ApiCoin: () => dispatch(fetchApiThunk()),
});

Coin.propTypes = {
  ApiCoin: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
