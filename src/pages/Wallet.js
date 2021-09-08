import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forms from '../components/forms';
import Header from '../components/header';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { addCurrency } = this.props;
    addCurrency();
  }

  render() {
    return (
      <>
        <Header />
        <Forms />
      </>
    );
  }
}

Wallet.propTypes = {
  addCurrency: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addCurrency: () => dispatch(fetchCoins()),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
