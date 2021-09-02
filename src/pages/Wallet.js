import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrenciesWithThunk } from '../actions';
import WalletForms from '../components/WalletForms';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <WalletForms />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesPayload: () => dispatch(fetchCurrenciesWithThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
