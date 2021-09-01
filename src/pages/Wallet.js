import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoin, fetchExchange } from '../actions';

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
    this.renderHeader = this.renderHeader.bind(this); // bind das funções necessárias;
    this.renderForm = this.renderForm.bind(this);
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  change({ target }) { // onChange dos inputs e selects
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleClick(e) {
    e.preventDefault();
    const { id, value, description, currency, method, tag } = this.state;
    const { fetchExchangeRates } = this.props;
    const estado = { id, value, description, currency, method, tag };
    fetchExchangeRates(estado);
    this.setState({
      id: id + 1,
    });
  }

  sumExpenses() {
    let count = 0;
    const { conversao } = this.props;
    conversao.forEach(({ value, currency, exchangeRates }) => {
      count += (Number(value) * Number(exchangeRates[currency].ask));
    });
    return count;
  }

  renderHeader() { // COMPONENTE 1
    const { emailInput } = this.props; // puxa o email por props
    return (
      <header>
        <section data-testid="email-field">{emailInput}</section>
        <section data-testid="total-field">{this.sumExpenses()}</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() { // COMPONENTE 2
    const { carteira } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <article>
        <form onSubmit={ this.handleClick }>
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
              { carteira.map((coin) => (
                <option key={ coin } value={ coin }>
                  { coin }
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

  render() { // RENDERIZANDO OS DOIS COMPONENTES
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

const mapStateToProps = (state) => ({
  emailInput: state.user.email, // puxamos o email colocado pelo usuário no estado global, e o utilizamos no componente por props;
  carteira: state.wallet.currencies,
  conversao: state.wallet.expenses, // array
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCoin()),
  fetchExchangeRates: (state) => dispatch(fetchExchange(state)),
});

Wallet.propTypes = {
  carteira: PropTypes.shape({
    map: PropTypes.func,
  }),
  conversao: PropTypes.shape({
    forEach: PropTypes.func,
  }),
  emailInput: PropTypes.string,
  fetchData: PropTypes.func,
  fetchExchangeRates: PropTypes.func,
  map: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
