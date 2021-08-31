import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class SelectCoin extends Component {
  render() {
    const { onChange, coins } = this.props;
    const keys = Object.keys(coins);
    function remove(coin) {
      if (coin !== 'USDT') {
        return coin;
      }
    }
    const keysSelect = keys.filter(remove);
    return (
      <label htmlFor="coin">
        Moeda
        <select onChange={ onChange } name="currency" required="required" id="coin">
          {
            keysSelect.map((key) => (<option key={ key }>{ key }</option>))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

SelectCoin.propTypes = {
  onChange: Proptypes.func,
}.isrequired;

export default connect(mapStateToProps)(SelectCoin);
