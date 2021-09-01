import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency, fetchExchanges } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.hChange = this.hChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  hChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    const { buttonExpenses } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const estado = { id, value, description, currency, method, tag };
    buttonExpenses(estado);
    this.setState({
      id: id + 1,
    });
  }

  sumExpenses() {
    const { cotation } = this.props;
    // const { exchangeRates } = cotation;
    let count = 0;
    // const filterCurrency = Object.value(exchangeRates)
    //   .reduce((acc, curr) => acc + (Number(value) * Number(curr.ask)), 0);

    cotation.forEach(({ value, currency = 'USD', exchangeRates }) => {
      count += (Number(value) * Number(exchangeRates[currency].ask));
    });
    return count;
  }

  renderHeader() {
    const { emailInput } = this.props;
    return (
      <header>
        <section data-testid="email-field">{emailInput}</section>
        <section data-testid="total-field">{this.sumExpenses()}</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() {
    const { moedas } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <article>
        <form onSubmit={ this.formSubmit }>
          <label htmlFor="value">
            Valor
            <input onChange={ this.hChange } type="text" id="value" value={ value } />
          </label>
          <label htmlFor="description">
            Descrição
            <input onChange={ this.hChange } id="description" value={ description } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select onChange={ this.hChange } id="currency" value={ currency }>
              {moedas.map((moeda) => (
                <option
                  key={ moeda }
                  value={ moeda }
                >
                  {moeda}
                </option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select onChange={ this.hChange } type="text" id="method" value={ method }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select onChange={ this.hChange } type="text" id="tag" value={ tag }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
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
  buttonExpenses: PropTypes.func,
  emailInput: PropTypes.any,
  fetchData: PropTypes.func,
  moedas: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
  moedas: state.wallet.currencies,
  cotation: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrency()),
  // buttonExpenses: (payload) => dispatch(sendExpenses(payload)),
  buttonExpenses: (state) => dispatch(fetchExchanges(state)),
});

Wallet.propTypes = {
  emailInput: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
