import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailValue } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ emailValue }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  emailValue: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
