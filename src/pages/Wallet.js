// React
import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Children
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    const { props: { userEmail } } = this;
    return (
      <WalletHeader
        userEmail={ userEmail }
      />
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  userEmail: store.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
