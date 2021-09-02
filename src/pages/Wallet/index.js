import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoins, fetchExchangeRatesWithUserInfo } from '../../actions';
import { Input, Select } from '../../components';
import style from './style.module.css';
import { coinsSelect,
  makeSumExpense, makeSumExpenses, paymentMethods, tags } from './utils';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      description: '',
      value: 0,
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  sumExpenses() {
    const { expenses } = this.props;
    const soma = makeSumExpenses(expenses);
    return soma.toFixed(2);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  handleSubmit(e) {
    const { sendUserExpenses } = this.props;
    const { id, description, value, currency, method, tag } = this.state;
    e.preventDefault();
    sendUserExpenses(({ id, value, description, currency, method, tag }));
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  renderHeader() {
    const { userEmail } = this.props;
    return (
      <header>
        <section data-testid="email-field">{userEmail}</section>
        <section data-testid="total-field">{this.sumExpenses()}</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() {
    const { handleChange, handleSubmit } = this;
    const { coins } = this.props;
    const { description, value, currency, method, tag } = this.state;
    return (
      <form className={ style.form } onSubmit={ handleSubmit }>
        <Input id="value" placeholder="Valor" onChange={ handleChange } value={ value } />
        <Input
          id="description"
          placeholder="Descrição"
          onChange={ handleChange }
          value={ description }
        />
        <Select
          id="currency"
          placeholder="Moeda"
          options={ coinsSelect(coins) }
          onChange={ handleChange }
          value={ currency }
        />
        <Select
          id="method"
          placeholder="Método de pagamento"
          options={ paymentMethods }
          onChange={ handleChange }
          value={ method }
        />
        <Select
          id="tag"
          placeholder="Tag"
          options={ tags }
          onChange={ handleChange }
          value={ tag }
        />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }

  renderExpenses() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
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
        </thead>
        {/*         <tfoot>
          <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
          </tr>
        </tfoot> */}
        <tbody>
          {expenses.map((expense) => {
            const {
              id, value, description, currency, exchangeRates, method, tag,
            } = expense;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{makeSumExpense(expense)}</td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">Editar</button>
                  <button type="button" data-testid="delete-btn">Deletar</button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    );
  }

  render() {
    return (
      <main className={ style.main }>
        {this.renderHeader()}
        <section>
          <article>
            {this.renderForm()}
          </article>
          <article>
            {this.renderExpenses()}
          </article>
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  fetchData: PropTypes.func.isRequired,
  sendUserExpenses: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCoins()),
  sendUserExpenses: (data) => dispatch(fetchExchangeRatesWithUserInfo(data)),
});
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
