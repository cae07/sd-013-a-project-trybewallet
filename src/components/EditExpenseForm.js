import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchCurrencies as getCurrencies,
  actionEndExpenseEdit as finishExpenseEdit,
} from '../actions';

class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    const { expenses, expenseId } = this.props;
    const expense = expenses.find((item) => item.id === expenseId);
    const { value, description, currency, method, tag, id, exchangeRates } = expense;

    // State inicial vai ser as chaves abaixo:
    this.state = {
      value,
      description,
      currency, // moeda
      method, // método de pagamento
      tag, // tipo de expense/despesa
      id, // id
      exchangeRates,
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

    const { value, description, currency, method, tag, id, exchangeRates } = this.state;
    const { endExpenseEdit } = this.props;
    const expense = {
      id, // id
      value,
      description,
      currency, // moeda
      method, // método de pagamento
      tag, // tipo de expense/despesa
      exchangeRates,
    };

    endExpenseEdit(expense);
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
          {/* Faz um map com o parametro de options recebido na função */}
          {/* Isso faz com que seja criado as opções do Select */}
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
      <form className="edit-expense-form">
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
          className="expense-btn end-edit"
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

// A função mapStateToProps mapeia as states armazenadas na store para uma props
// Ou seja, no caso abaixo eu acessei o reducer wallet para acessar a currencies, expenses e expenseId
// E coloquei na props currencies, expenses e expenseId abaixo nas chaves
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  expenseId: state.wallet.expenseId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  endExpenseEdit: (expense) => dispatch(finishExpenseEdit(expense)),
});

// Faço a validação se os dados que recebi são válidos
EditExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object),
  expenseId: PropTypes.number.isRequired,
  endExpenseEdit: PropTypes.func.isRequired,
};

// Semelhante ao propTypes, eu utilizo o defaultProps para definir um comportamento default, para quando uma propriedade não for informada receber algum valor em especial, no caso abaixo, a chave currencies e expenses recebem um array vazio.
EditExpenseForm.defaultProps = {
  currencies: [],
  expenses: [],
};

// Faço a conexão do mapStateToProps e mapDispatchToProps com o componente EditExpenseForm
export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseForm);
