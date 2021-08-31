import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletBody from './components/WalletBody';
import { getCurrencies, saveNewExpense } from '../actions';

let id = 0;

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      currency: 'USD',
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    const { savePairs } = this.props;
    savePairs();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async saveExpense() {
    const { value, description, method, tag, currency, totalExpenses } = this.state;
    const { expenseSaving } = this.props;
    this.setState({
      currency: 'USD',
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    const askForExpenseCurrency = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((r) => r);
    Object.values(askForExpenseCurrency).forEach((cur) => {
      const newName = cur.name.split('/');
      [cur.name] = newName;
    });
    const globalStateObject = {
      id,
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates: {
        ...askForExpenseCurrency,
      },
    };
    id += 1;
    expenseSaving(globalStateObject);
    let newExpenses = value * askForExpenseCurrency[currency].ask;
    newExpenses = Math.round((newExpenses + totalExpenses) * 100) / 100;
    this.setState({
      totalExpenses: newExpenses,
    });
  }

  renderExpenseTable() {
    const { expenses } = this.props;
    return expenses.map((expense) => {
      const { value, description, method, tag, currency, exchangeRates } = expense;
      const askPrice = exchangeRates[currency].ask;
      const expenseInBrl = Math.round((value * askPrice) * 100) / 100;
      const usedCurrency = exchangeRates[currency];
      const roundAsk = Math.round((usedCurrency.ask) * 100) / 100;
      return (
        <tr key={ expense.id } id={ expense.id }>
          <td>
            {description}
          </td>
          <td>
            {tag}
          </td>
          <td>
            {method}
          </td>
          <td>
            {value}
          </td>
          <td>
            {usedCurrency.name}
          </td>
          <td>
            {roundAsk}
          </td>
          <td>
            {expenseInBrl}
          </td>
          <td>
            Real
          </td>
          <td>
            <button type="button">Deletar</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses, value, description, method, tag, currency } = this.state;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{userEmail}</h4>
          <h4 data-testid="total-field">{totalExpenses}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <WalletBody
          value={ value }
          d={ description }
          method={ method }
          tag={ tag }
          crrncy={ currency }
          handleChange={ this.handleChange }
          saveExpense={ this.saveExpense }
        />
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {this.renderExpenseTable()}
        </table>
      </div>);
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  savePairs: PropTypes.func.isRequired,
  expenseSaving: PropTypes.func.isRequired,
  expenses: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  savePairs: () => dispatch(getCurrencies()),
  expenseSaving: (globalStateObject) => dispatch(saveNewExpense(globalStateObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
