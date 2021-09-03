import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailGlobalState } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { emailGlobalState }
        </p>
        <p data-testid="total-field">Despesa total: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Wallet.propTypes = {
  emailGlobalState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailGlobalState: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
