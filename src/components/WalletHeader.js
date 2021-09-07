import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const {
      props: { username, totalAmount = 0 },
    } = this;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <h3 data-testid="email-field">
          Usuário:
          { username }
        </h3>
        <h3 data-testid="total-field">
          Despesa total:
          { totalAmount }
        </h3>
        <h3 data-testid="header-currency-field">
          Moeda atual: BRL
        </h3>
      </header>
    );
  }
}

// Utilizando o rootReducer como parâmetro, que já está desconstruido para facilitar a compreensão.
// O nome da chave do objeto acaba se tornando o nome da prop.
const mapStateToProps = ({ user, wallet }) => ({
  username: user.email,
  expenseList: wallet.expenses,
  totalAmount: wallet.totalAmount,
});

WalletHeader.propTypes = {
  username: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
