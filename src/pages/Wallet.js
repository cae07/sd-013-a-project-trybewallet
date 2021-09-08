import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormsWallet from '../components/FormsWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <br />
          <h3 data-testid="total-field">0</h3>
          <br />
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <FormsWallet />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
