import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">{ email }</span>
          <span>
            Despesa Total: R$
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: '',
};

export default connect(mapStateToProps)(Wallet);
