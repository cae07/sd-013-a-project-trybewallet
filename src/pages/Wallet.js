import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../component/Form';
import { currencyAPIThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencyAPI } = this.props;
    currencyAPI();
  }

  render() {
    const INITIAL_VALUE = 0;
    const { userEmail, currencies } = this.props;
    return (
      <div className="App">
        <header className="wallet-header">
          <p data-testid="header-currency-field">BRL</p>
          <span data-testid="email-field">{ userEmail }</span>
          <p data-testid="total-field">{ INITIAL_VALUE }</p>
        </header>
        <Form currencies={ currencies } />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencyAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyAPI: () => dispatch(currencyAPIThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
