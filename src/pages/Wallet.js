import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return <div>TrybeWallet</div>;
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.userReducer,
}
);

export default connect(mapStateToProps)(Wallet);
