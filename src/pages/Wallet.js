import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <Form />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});
Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
});
export default connect(mapStateToProps)(Wallet);
