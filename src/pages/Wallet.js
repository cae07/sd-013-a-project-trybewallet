import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendExpenseApi, sendMoedasApi } from '../actions';
import Moedas from '../components/Moedas';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.change = this.change.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { dispatchMoedas } = this.props;
    dispatchMoedas();
  }

  change({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { buttonExpenses } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const estado = { id, value, description, currency, method, tag };
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    },
    () => buttonExpenses(estado));
  }

  sumExpenses() {
    const { cotation } = this.props;
    let contador = 0;
    cotation
      .forEach(({ value, currency, exchangeRates }) => {
        if (exchangeRates[currency]) {
          contador += (Number(value) * Number(exchangeRates[currency].ask));
          return contador;
        }
        return contador;
      });
    return contador.toFixed(2);
  }

  renderHeader() {
    const { salvarStore } = this.props;
    return (
      <header>
        <section data-testid="email-field">{`Email: ${salvarStore}`}</section>
        <section data-testid="total-field">{ this.sumExpenses() }</section>
        <section data-testid="header-currency-field">Moeda: BRL</section>
      </header>
    );
  }

  renderButton() {
    return (
      <span>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </span>
    );
  }

  renderForm() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <article>
        <form onSubmit={ this.submitForm }>
          <label htmlFor="value">
            Valor
            <input type="text" id="value" onChange={ this.change } value={ value } />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" onChange={ this.change } value={ description } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select type="text" id="currency" onChange={ this.change } value={ currency }>
              <Moedas />
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select type="text" id="method" onChange={ this.change } value={ method }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select type="text" id="tag" onChange={ this.change } value={ tag }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transport">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          { this.renderButton() }
        </form>
        <Link to="/">VOLTAR</Link>
      </article>
    );
  }

  render() {
    return (
      <main>
        {this.renderHeader()}
        <section>
          {this.renderForm()}
        </section>

      </main>
    );
  }
}

Wallet.propTypes = {
  salvarStore: func.isRequired,
  dispatchMoedas: func.isRequired,
  buttonExpenses: func.isRequired,
  forEach: func.isRequired,
  cotation: arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  salvarStore: state.user.email,
  cotation: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMoedas: () => dispatch(sendMoedasApi()),
  buttonExpenses: (state) => dispatch(sendExpenseApi(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
