import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';
import Form from '../components/Form/Form';
import Header from '../components/HeaderWallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchfetchCoin } = this.props;
    dispatchfetchCoin();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  fetchApi: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchfetchCoin: () => dispatch(fetchCoins()),
});

export default connect(null, mapDispatchToProps)(Wallet);
