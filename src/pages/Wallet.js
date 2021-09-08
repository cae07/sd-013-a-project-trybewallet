import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewExpense from '../components/NewExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
      currentCurrency: 'BRL',
    };
  }

  render() {
    const { username } = this.props;
    const { totalExpenses, currentCurrency } = this.state;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h3 data-testid="email-field">
            Usuário:
            { username }
          </h3>
          <h3 data-testid="total-field">
            Despesa total:
            { totalExpenses }
          </h3>
          <h3 data-testid="header-currency-field">
            Moeda atual:
            { currentCurrency }
          </h3>
        </header>
        <NewExpense />
      </div>
    );
  }
}

// Utilizando o rootReducer como parâmetro, que já está desconstruido para facilitar a compreensão.
// O nome da chave do objeto acaba se tornando o nome da prop.
const mapStateToProps = ({ user }) => ({
  username: user.email,
});

Wallet.propTypes = {
  username: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
