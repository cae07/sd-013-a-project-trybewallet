import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestExpenseAndApi } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.currencieForm = this.currencieForm.bind(this);
    this.methodForm = this.methodForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      currencies: [],
      value: 0,
      id: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const ApiFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await ApiFetch.json();
    const Allcurrencies = Object.keys(json);
    const currenciesLessUSDT = Allcurrencies.filter((currencie) => currencie !== 'USDT');
    this.setState({
      currencies: currenciesLessUSDT,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { expenseApi } = this.props;
    const { value, id, description, currency, method, tag } = this.state;
    const all = { value, id, description, currency, method, tag };
    expenseApi(all);
    this.setState({
      id: id + 1,
    });
  }

  currencieForm() {
    const { currencies, currency } = this.state;
    return (
      <select
        name="currency"
        id="currency"
        value={ currency }
        onChange={ this.handleChange }
      >
        {currencies.map((currencie, index) => (
          <option
            key={ index }
          >
            {currencie}
          </option>
        ))}
      </select>
    );
  }

  methodForm() {
    const { method } = this.state;
    return (
      <select
        name="method"
        id="method"
        value={ method }
        onChange={ this.handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito"> Cartão de débito</option>
      </select>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }

  render() {
    const { value, description, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          { this.currencieForm() }
        </label>
        <label htmlFor="method">
          Método de pagamento
          { this.methodForm()}
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {this.renderSubmitButton()}
      </form>

    );
  }
}
Form.propTypes = {
  expenseApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  expenseApi: (expenses) => dispatch(requestExpenseAndApi(expenses)),
});

export default connect(null, mapDispatchToProps)(Form);

// com a ajuda do Edu, segundo parametro do setState, puxando arrow function espera atualizar para chamar o state.
