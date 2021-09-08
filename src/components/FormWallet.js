import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import { saveExpenses } from '../actions';

let id = 0;

class FormWallet extends React.Component {
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
    this.currenciesList = this.currenciesList.bind(this);
    this.addExpensesButton = this.addExpensesButton.bind(this);
    this.inputCreate = this.inputCreate.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  currenciesList() {
    const { currencies } = this.props;
    return currencies.map((moeda) => (
      <option key={ moeda } value={ moeda }>{ moeda }</option>
    ));
  }
  // função feita consultando o Codigo de Victor Diniz, achei interessante o jeito de atualizar o nome e a dispesa total.
  // https://github.com/tryber/sd-013-a-project-trybewallet/blob/victor-diniz-project-trybewallet/src/pages/Wallet.js

  async addExpensesButton() {
    const { value, currency, description, method, tag, totalExpenses } = this.state;
    const { expenseSave } = this.props;
    const promiseCambio = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cambio = await promiseCambio.json();
    delete cambio.USDT;
    Object.values(cambio).forEach((moeda) => {
      const nome = moeda.name.split('/');
      [moeda.name] = nome;
    });
    const estadoReduxGlobal = {
      id,
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates: {
        ...cambio,
      },
    };
    id += 1;
    expenseSave(estadoReduxGlobal);
    this.setState({
      totalExpenses: 0,
      currency: 'USD',
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    let newExpenses = value * cambio[currency].ask;
    newExpenses = Math.round((newExpenses + totalExpenses) * 100) / 100;
    this.setState({
      totalExpenses: newExpenses,
    });
  }

  inputCreate(descricao, htmlFor, name) {
    return (
      <label htmlFor={ htmlFor }>
        { descricao }
        <input id={ htmlFor } type="text" name={ name } onChange={ this.handleChange } />
      </label>);
  }

  render() {
    const { totalExpenses } = this.state;
    return (
      <>
        <Header totalExpenses={ totalExpenses } />
        <form>
          {this.inputCreate('Valor:', 'valor', 'value')}
          {this.inputCreate('Descrição:', 'descricao', 'description')}
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="currency" onChange={ this.handleChange }>
              {this.currenciesList()}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento" name="method" onChange={ this.handleChange }>
              <option value="dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag" onChange={ this.handleChange }>
              <option value="Alimentacao">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.addExpensesButton }
          >
            {' '}
            adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenseSave: (payload) => dispatch(saveExpenses(payload)),
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseSave: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
