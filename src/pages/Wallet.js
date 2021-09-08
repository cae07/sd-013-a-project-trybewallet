/* eslint-disable react/prop-types */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRequestCurrencies, actionRequestQuotation } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
      description: '',
      id: 0,
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { requestQuotation } = this.props;
    const { id } = this.state;
    requestQuotation(this.state);
    this.setState({
      currencies: [],
      currency: 'USD',
      description: '',
      id: id + 1,
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: '',
    });
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header className="header">
        <p className="email-class" data-testid="email-field">{ email }</p>
        <p data-testid="total-field">Total das despezas: R$0</p>
        <p data-testid="header-currency-field">Câmbio utilizado: BRL</p>
      </header>
    );
  }

  renderForm() {
    const { currency, description, method, tag, value } = this.state;
    const { currencies } = this.props;
    let arrayCurrencies = null;
    if (currencies !== null && currencies !== undefined) {
      arrayCurrencies = Object.keys(currencies[0]);
    }
    return (
      <form className="form-class">
        { this.renderValueToCoin(arrayCurrencies, currency, description, value) }
        <div className="input-container">
          <label className="form-label" htmlFor="input-select-payment-type-id">
            Método de pagamento:
            <select
              className="form-select"
              id="input-select-payment-type-id"
              name="method"
              onChange={ this.handleChange }
              value={ method }
            >
              <option name="method" value="Dinheiro">Dinheiro</option>
              <option name="method" value="Cartão de crédito">Cartão de crédito</option>
              <option name="method" value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="input-select-tag-id">
            Tag:
            <select
              className="form-select"
              id="input-select-tag-id"
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option name="tag" value="Alimentação">Alimentação</option>
              <option name="tag" value="Lazer">Lazer</option>
              <option name="tag" value="Trabalho">Trabalho</option>
              <option name="tag" value="Transporte">Transporte</option>
              <option name="tag" value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <button
          className="btn btn-primary"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }

  renderValueToCoin(arrayCurrencies, currency, description, value) {
    const { currencies } = this.props;
    return (
      <>
        <div className="input-container">
          <label className="form-label" htmlFor="input-value-id">
            Valor:
            <input
              className="form-control"
              id="input-value-id"
              name="value"
              onChange={ this.handleChange }
              type="text"
              value={ value }
            />
          </label>
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="input-description-id">
            Descrição:
            <input
              className="form-control"
              id="input-description-id"
              name="description"
              onChange={ this.handleChange }
              type="text"
              value={ description }
            />
          </label>
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="input-select-currency-id">
            Moeda:
            <select
              className="form-select"
              id="input-select-currency-id"
              name="currency"
              onChange={ this.handleChange }
              value={ currency }
            >
              { !currencies ? <span>...Loading</span> : arrayCurrencies
                .map((item, index) => (
                  <option
                    key={ index }
                    name="currency"
                    value={ item }
                  >
                    { item }
                  </option>)) }
            </select>
          </label>
        </div>
      </>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <main>
        { this.renderHeader() }
        { this.renderForm() }
        <section>
          <div className="columns-container">
            <p>Descrição</p>
            <p>Tag</p>
            <p>Método de pagamento</p>
            <p>Valor</p>
            <p>Moeda</p>
            <p>Cãmbio utilizado</p>
            <p>Valor convertido</p>
            <p>Moeda de conversão</p>
            <p>Editar/Excluir</p>
          </div>
          <div className="main-container-lines">
            { expenses && expenses.map((item, index) => (
              <div className="lines-container" key={ index }>
                <p>{ item }</p>
              </div>
            )) }
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requestQuotation: (state) => (
    dispatch(actionRequestQuotation(state))),
  requestCurrencies: () => dispatch(actionRequestCurrencies()),
});

Wallet.propTypes = {
  // currencies: PropTypes.arrayOf().isRequired,
  email: PropTypes.string,
  // expenses: PropTypes.arrayOf({}).isRequired,
  requestCurrencies: PropTypes.func.isRequired,
  requestQuotation: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  email: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
