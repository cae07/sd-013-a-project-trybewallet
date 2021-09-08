import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objectOf, string } from 'prop-types';

class Moedas extends Component {
  render() {
    const { getCurrencies } = this.props;
    const arrayCurrencies = Object.keys(getCurrencies);
    return (
      <>
        { arrayCurrencies
          .map((currency, i) => {
            if (currency !== 'USDT') {
              return <option key={ i }>{currency}</option>;
            }
            return true;
          })}
      </>
    );
  }
}

Moedas.propTypes = {
  getCurrencies: objectOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Moedas);
