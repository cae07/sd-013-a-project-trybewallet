import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchMoedas, addApiExpenses } from '../actions';
import Table from './Table';
import './Wallet.css';

// TODO O MÉRITO DA QUESTÃO 8 PARA MATHEUS MACEDO -> VALEU BROW!
class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.paragraph = this.paragraph.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { actionApiMoedas } = this.props;
    actionApiMoedas();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    const { actionAPiExpense } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const estados = { id, value, description, currency, method, tag };

    this.setState({ id: id + 1 }, () => actionAPiExpense(estados));
    this.zerar();
  }

  somaValores() {
    const { expenses } = this.props;
    let soma = 0;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += value * exchangeRates[currency].ask;
    });

    return soma.toFixed(2);
  }

  zerar() {
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  inputValues() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectOptionMoeda() {
    const { currency } = this.state;
    const { currencyMoeda } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          name="currency"
          className="moedas"
        >
          {currencyMoeda.map((element) => (
            <option key={ element }>{element}</option>
          ))}
        </select>
      </label>
    );
  }

  selectOptionPagamento() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          value={ method }
          onChange={ this.handleChange }
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectOptionTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" value={ tag } onChange={ this.handleChange } name="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  paragraph() {
    const { emailLogin } = this.props;

    return (
      <>
        <p data-testid="email-field">
          <strong>{`Email: ${emailLogin}`}</strong>
        </p>
        <p data-testid="total-field">
          {`Despesa: ${this.somaValores()}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }

  render() {
    return (
      <div>
        <header>
          { this.paragraph() }
        </header>
        <form>
          {this.inputValues()}
          {this.imputDescription()}
          {this.selectOptionMoeda()}
          {this.selectOptionPagamento()}
          {this.selectOptionTag()}
          <button
            type="button"
            onClick={ () => this.handleClick() }
          >
            Adicionar despesa
          </button>
        </form>
        <Table soma={ this.somaValores() } />
      </div>
    );
  }
}

Wallet.propTypes = {
  emailLogin: PropTypes.string,
  actionApiMoedas: PropTypes.func,
  currencyMoeda: PropTypes.arrayOf(),
}.isRequire;

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
  currencyMoeda: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispacth) => ({
  actionApiMoedas: () => dispacth(fetchMoedas()),
  actionAPiExpense: (state) => dispacth(addApiExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// TODO O MÉRITO DA QUESTÃO 8 PARA MATHEUS MACEDO -> VALEU BROW!
