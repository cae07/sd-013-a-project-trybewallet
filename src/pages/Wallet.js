import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const INITIAL_VALUE = 0;
    const { userEmail } = this.props;
    return (
      <div className="App">
        <header className="wallet-header">
          <p data-testid="header-currency-field">BRL</p>
          <span data-testid="email-field">{ userEmail }</span>
          <p data-testid="total-field">{ INITIAL_VALUE }</p>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
