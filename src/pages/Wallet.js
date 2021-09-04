import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import WalletForm from '../components/WalletForm';
/*
Meus agradecimentos ao aluno mais bonito
  da Trybe - Rogério P. da Silva
Que me salvou da minha lentidão mental.
*/
class Wallet extends React.Component {
  componentDidMount() {
    const { walletState } = this.props;
    walletState();
  }

  render() {
    const { email, expenses } = this.props;
    const amount = expenses
      .reduce((acc, curr) => acc + Number(curr
        .value * curr.exchangeRates[curr.currency].ask), 0);
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <br />
          <span data-testid="total-field">{ amount.toFixed(2) }</span>
          <br />
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <WalletForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  walletState: (payload) => dispatch(fetchAPI(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  walletState: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
