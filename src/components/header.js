import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.total = this.total.bind(this);
  }

  total() {
    let totalExpense = 0;
    const { expenses } = this.props;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      totalExpense += (parseFloat(value) * parseFloat(exchangeRates[currency].ask));
    });

    return totalExpense.toFixed(2);
  }

  render() {
    const { getEmail } = this.props;
    return (
      <div className="container-header">
        <p data-testid="email-field">
          Email:
          {getEmail}
        </p>
        <div>
          <p data-testid="total-field">
            Despesa Total:
            { this.total()}
          </p>
        </div>
        <div>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

// com a ajuda da Julia consegui fazer a soma!!!
// referenciar uma chave , ao colocar com o colchete, ao passar uma variavel como chave, ele pega o valor da variavel
// const obj = {
//   nome: 'matheus,',
//   idade: 24,
// };
// let name = 'nome'
// obj[name]
// explicação do Matheus
