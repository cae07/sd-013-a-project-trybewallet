/* import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getAllExpenses = this.getAllExpenses.bind(this); // Soma o total das expenses
  }

  // realiza o total de gastos com o fator de convesão
  getAllExpenses() {
    const { gastos } = this.props;
    // realiza a leitura de todas as despesas e realiza a acumulação
    const totalExpenses = gastos.reduce((total, each) => {
      const { value, currency, exchangeRates } = each; // Desconstrói o value, currency e exchangeRates de cada elemento lido pelo reduce
      const rate = parseFloat(exchangeRates[currency].ask); // A chave .ask é a que guarda na API o rate/fator de conversão
      return total + parseFloat(value) * rate; // Retorna o total já com a conversão realizada
    }, 0);
    return totalExpenses.toFixed(2); // Aplica duas casas após a vírgula
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`E-mail: ${email}`}</p>
        <div>
          <span data-testid="total-field">
            {/* Realiza o total dos gasttos
            {`Despesa Total: R$ ${this.getAllExpenses()} `}
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  gastos: state.wallet.gastos,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  gastos: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  gastos: [],
};

export default connect(mapStateToProps)(Header);
 */
