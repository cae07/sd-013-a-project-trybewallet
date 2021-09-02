import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectCoin extends Component {
  render() {
    const { currencies } = this.props;
    const anything = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda:
        <select name="currency" id="currency">
          {anything.map(
            (each) => <option key={ each }>{ each }</option>,
          )}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies[0],
});

SelectCoin.propTypes = {
  currencies: PropTypes.arrayOf(),
}.isRequired;

SelectCoin.defaultProps = {
  currencies: {},
};

export default connect(mapStateToProps)(SelectCoin);
