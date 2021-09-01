import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderForm from '../components/HeaderForm';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { expenses } = this.state;
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          {email}
        </span>
        <span data-testid="total-field">
          { expenses }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
        <HeaderForm />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
