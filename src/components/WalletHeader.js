import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <header className="wallet-header">
        <span data-testid="email-field">{`Email: ${userEmail}`}</span>
        <span data-testid="total-field">{`Despesa total: R$${total.toFixed(2)}`}</span>
        <span data-testid="header-currency-field">Moeda Base: BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(WalletHeader);

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.number,
};

WalletHeader.defaultProps = {
  total: 0,
};
