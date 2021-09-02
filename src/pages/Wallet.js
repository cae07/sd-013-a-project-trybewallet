import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoin, fetchExchangesRates } from '../actions';

class Wallet extends React.Component {
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
    this.change = this.change.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  change({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const { id, value, description, currency, method, tag } = this.state;
    const { buttonExpenses } = this.props;
    const estado = { id, value, description, currency, method, tag };

    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    }, () => buttonExpenses(estado));
  }

  sumExpenses() {
    const { cotation } = this.props;
    let count = 0;
    cotation.forEach(({ value, currency, exchangeRates }) => {
      if (exchangeRates[currency]) {
        count += (Number(value) * Number(exchangeRates[currency].ask));
        return count;
      }
      return count;
    });
    return count.toFixed(2);
  }

  renderHeader() {
    const { userEmail } = this.props;
    return (
      <header>
        <section data-testid="email-field">{ userEmail }</section>
        <section data-testid="total-field">{ this.sumExpenses() }</section>
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
            <input onChange={ this.change } type="text" id="value" value={ value } />
          </label>
          <label htmlFor="description">
            Descrição
            <input onChange={ this.change } id="description" value={ description } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select onChange={ this.change } type="text" id="currency" value={ currency }>
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
            <select onChange={ this.change } type="text" id="method" value={ method }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select onChange={ this.change } type="text" id="tag" value={ tag }>
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
  fetchData: PropTypes.func,
  moedas: PropTypes.shape({
    map: PropTypes.func,
  }),
  userEmail: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  moedas: state.wallet.currencies,
  cotation: state.wallet.expenses, // é um array
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCoin()),
  // buttonExpenses: (payload) => dispatch(sendExpenses(payload)),
  buttonExpenses: (state) => dispatch(fetchExchangesRates(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
