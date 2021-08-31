import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      expenses: [],
    };
  } */

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <section>
            <span>
              Email:
              <p data-testid="email-field">{ user.email }</p>
            </span>
            <span data-testid="header-currency-field">
              Despesa Total:
              <p data-testid="total-field">0</p>
              {' '}
              BRL
            </span>
          </section>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Wallet);
