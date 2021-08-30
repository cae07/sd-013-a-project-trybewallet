import React from 'react';
// Importa o connect para realizar a conexão entre o mapStateToProps e o mapDispatchToProps com o componente NewExpenseForm
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Importa função de fetch da API como currenciesAPI
import currenciesAPI from '../services';

// Importando e renomeando as actions
import {
  fetchCurrencies as getCurrencies,
  actionSaveExpense as addExpense,
} from '../actions';

// State inicial vai ser as chaves abaixo:
const INITIAL_STATE = {
  value: '0',
  description: '',
  currency: 'USD',
  method: 'Dinheiro', // Opções à adicionar: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito']
  tag: 'Alimentação', // Opções à adicionar: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
  id: 0,
};

class NewExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    // State inicial vai a chamada da constante abaixo criada fora da classe
    this.state = {
      ...INITIAL_STATE,
    };

    // As funções abaixo serão habilitadas para serem usadas em todo o componente/page
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  // Tudo que for digitado nos campos, é alterado automaticamente na state
  // Conforme for digitando os campos são guardados na state
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick(event) {
    event.preventDefault(); // Cancela um evento se ele for cancelável sem parar a propagação do mesmo

    const { value, description, currency, method, tag, id } = this.state;
    const { saveExpense } = this.props;
    const exchangeRates = await currenciesAPI();
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    saveExpense(expense);

    // Altera o id do state adicionando "+1" ao id atual
    this.setState({
      ...INITIAL_STATE,
      id: id + 1,
    });
  }

  // ****************************************************************************
  // Função de renderização do Input
  // ****************************************************************************
  // {this.renderInput('Valor', 'number', 'value', value)}
  // {this.renderInput('Descrição', 'text', 'description', description)}
  // label: "Valor" ou "Descrição"
  // type: "number" ou "text"
  // name: "value" ou "description"
  // value: variável value ou description
  renderInput(label, type, name, value) {
    return (
      <label htmlFor={ `${name}-input` }>
        {`${label}: `}
        <input
          type={ type }
          id={ `${name}-input` }
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ this.handleChange }
          value={ value }
          className={ `${name}-input` }
        />
      </label>
    );
  }

  renderSelectCurrencies(value, handleChange) {
    const { currencies } = this.props;
    return (
      <select
        id="currency-input"
        name="currency"
        data-testid="currency-input"
        onChange={ handleChange }
        value={ value }
        className="currency-input"
      >
        {currencies.map((currency) => {
          if (currency === 'USDT') return '';
          return (
            <option key={ currency } data-testid={ currency }>
              {currency}
            </option>
          );
        })}
      </select>
    );
  }

  // ****************************************************************************
  // Função de renderização do Select
  // ****************************************************************************
  // {this.renderSelect('Método de pagamento', 'method', method, methods)}
  // {this.renderSelect('Tag', 'tag', tag, tags)}
  // label: "Tag" ou "Método de pagamento"
  // name: "method" ou "tag"
  // value: "method" ou "tag"
  // options: "methods" ou "tags"
  renderSelect(label, name, value, options) {
    return (
      <label htmlFor={ `${name}-input` }>
        {`${label}: `}
        <select
          id={ `${name}-input` }
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ this.handleChange }
          value={ value }
        >
          {options.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    // Criando as tags opcionais de expenses
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    // Criando os methods de pagamento
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    return (
      <form className="new-expense-form">
        <label htmlFor="currency-input">
          {'Moeda: '}
          {this.renderSelectCurrencies(currency, this.handleChange)}
        </label>
        {this.renderInput('Valor', 'number', 'value', value)}
        {this.renderInput('Descrição', 'text', 'description', description)}
        {this.renderSelect('Tag', 'tag', tag, tags)}
        {this.renderSelect('Método de pagamento', 'method', method, methods)}
        <button
          type="submit"
          onClick={ this.handleClick }
          className="expense-btn add-expense"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

// A função mapStateToProps mapeia as states armazenadas na store para uma props
// Ou seja, no caso abaixo eu acessei o reducer wallet para acessar a currencies
// E coloquei na props currencies abaixo nas chaves
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  saveExpense: (expense) => dispatch(addExpense(expense)),
});

// Faço a validação se os dados que recebi são válidos
NewExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  saveExpense: PropTypes.func.isRequired,
};

// Bem semelhante ao propTypes, eu utilizo o defaultProps para definir um comportamento default, para quando uma propriedade não for informada receber algum valor em especial, no caso abaixo, a chave currencies receber um array vazio.
NewExpenseForm.defaultProps = {
  currencies: [],
};
// Faço a conexão do mapStateToProps e mapDispatchToProps com o componente NewExpenseForm
export default connect(mapStateToProps, mapDispatchToProps)(NewExpenseForm);
