import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { currencies } = this.props;
    const keys = Object.keys(currencies);

    return (
      keys.map((currency) => (
        <option name="moeda" key={ currency } value={ currency }>{currency}</option>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Option.propTypes = {
  currencies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default connect(mapStateToProps)(Option);
