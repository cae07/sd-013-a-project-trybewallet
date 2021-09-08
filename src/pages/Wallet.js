import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas, fetchExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { apiFetch } = this.props;
    apiFetch();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { expensesFetch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const estados = { id, value, description, currency, method, tag };
    this.setState({ id: id + 1 }, () => expensesFetch(estados));
  }

  inputValor() {
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

  inputDescricao() {
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

  inputSelect() {
    const { currency } = this.state;
    const { moedas } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          className="moedas"
          value={ currency }
          onChange={ this.handleChange }
        >
          { moedas.map((moeda) => (<option key={ moeda }>{ moeda }</option>)) }
        </select>
      </label>
    );
  }

  inputPagamento() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTags() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ `Dispensa total: ${0}` }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          { this.inputValor() }
          { this.inputDescricao() }
          { this.inputSelect() }
          { this.inputPagamento() }
          { this.inputTags() }
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  apiFetch: () => dispatch(fetchMoedas()),
  expensesFetch: (state) => dispatch(fetchExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
