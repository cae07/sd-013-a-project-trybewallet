// Requisito 7 feito com a ajuda de Murilo Rainho.
// Object.keys + map feito baseado em exemplo: https://stackoverflow.com/questions/44952663/react-propttypes-object-of-objects

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCoin extends Component {
  render() {
    const { currencies, selectCoin, onChange } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="currency" value={ selectCoin } onChange={ onChange }>
          {
            Object.keys(currencies).map((currency, index) => {
              if (currency !== 'USDT') {
                return <option key={ index }>{currency}</option>;
              }
              return null;
            })
          }
        </select>
      </label>
    );
  }
}

SelectCoin.propTypes = {
  currencies: PropTypes.array,
  onChange: PropTypes.func,
  selectCoin: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCoin);
