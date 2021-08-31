import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <form>
          <div>
            Email:
            <span data-testid="email-field">{ user.email }</span>
          </div>
          <div data-testid="header-currency-field">
            Despesa Total:
            <span data-testid="total-field">0</span>
            {' '}
            BRL
          </div>
        </form>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

HeaderWallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
