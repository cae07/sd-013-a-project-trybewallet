import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoins, fetchExchangeRatesWithUserInfo } from '../../actions';
import { Input, Select } from '../../components';
import style from './style.module.css';
import { coinsSelect, makeSumExpenses, paymentMethods, tags } from './utils';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      description: '',
      value: 0,
      currency: 'USD',
      method: null,
      tag: null,
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
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    sendUserExpenses(expense);
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

  }

  render() {
    return (
      <main className={ style.main }>
        {this.renderHeader()}
        <section>
          {this.renderForm()}
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
