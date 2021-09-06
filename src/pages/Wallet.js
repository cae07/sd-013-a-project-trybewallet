import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email, expenses = 0 } = this.props;
    return (
      <div>
        <div>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            { `Despesa total: R$${expenses} ` }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
