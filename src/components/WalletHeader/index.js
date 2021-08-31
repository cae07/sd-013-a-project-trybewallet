import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WalletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { userEmail, total } = this.props;

    return (
      <header className="wallet-header">

        <div className="wallet-email">
          <span data-testid="email-field">{`Email: ${userEmail}`}</span>
          <span data-testid="total-field">{`Despesas Totais: ${total}`}</span>
          <span data-testid="header-currency-field">Câmbio: BRL</span>
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
});

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.number,
};

WalletHeader.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps)(WalletHeader);
