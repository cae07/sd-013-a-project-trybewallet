import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, null)(Wallet);
