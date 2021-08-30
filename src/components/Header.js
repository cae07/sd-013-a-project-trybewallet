import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // As funções abaixo serão habilitadas para serem usadas em todo o componente/page
    this.getTotalExpenses = this.getTotalExpenses.bind(this); // Soma o total das expenses
  }

  getTotalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((total, each) => {
      const { value, currency, exchangeRates } = each;
      const rate = parseFloat(exchangeRates[currency].ask); // A chave .ask é a que guarda na API o rate/fator de conversão

      return total + parseFloat(value) * rate; // Retorna o total já com a conversão realizada
    }, 0);
    return totalExpenses.toFixed(2); // Aplica duas casas após a vírgula
  }

  render() {
    const { email } = this.props;
    return (
      <header className="wallet-header">
        <h1>Trybe Wallet</h1>
        <p data-testid="email-field" className="wallet-email">{`E-mail: ${email}`}</p>
        <div className="wallet-total-value">
          <span data-testid="total-field">
            {`Despesa Total: R$ ${this.getTotalExpenses()} `}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

// A função mapStateToProps mapeia as states armazenadas na store para uma props
// Ou seja, no caso abaixo eu acessei o reducer user para acessar o email
// E também acessei o reducer wallet para acessar a expenses
// E ambos colocar dentro de suas devidas props criadas abaixo nas chaves
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

// Faço a conexão do componente Header com a mapStateToProps
export default connect(mapStateToProps)(Header);

// Faço a validação se os dados que recebi são válidos
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

// Bem semelhante ao propTypes, eu utilizo o defaultProps para definir um comportamento default, para quando uma propriedade não for informada receber algum valor em especial, no caso abaixo, a chave expenses receber um array vazio.
Header.defaultProps = {
  expenses: [],
};
