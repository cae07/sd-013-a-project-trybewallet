import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import apiWithThunk, { fetchExpenseAPI } from '../actions/actionsThunk';
import { tags, methods } from '../utils/options';
import Table from './Table';
import { Input, Select, Button } from '.';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };

    this.renderInputs = this.renderInputs.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { // Retorna o JSON com as moedas.
    const { getCoinsThunk } = this.props;
    getCoinsThunk();
  }

  handleChange({ target }) { // Salva os valores dos inputs no estado local
    const { name, value } = target;
    const { expense } = this.state;

    this.setState({
      expense: {
        ...expense,
        [name]: value,
      },
    });
  }

  handleSubmit(event) { // Enviar expenses para o estado global
    event.preventDefault();
    const { expense } = this.state; // Traz expense do estado local
    const { expenses } = this.props; // Traz a chave expenses do mapDispatchToProps
    this.setState({
      expense: {
        id: expense.id + 1,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    }, () => {
      expenses(expense); // Salva os valores do array no expenses do mapDispatchToProps
    });
  }

  renderSelects() {
    const { currencies } = this.props;
    const getCurrencies = Object.keys(currencies);
    const filterCurrencies = getCurrencies.filter((item) => item !== 'USDT');
    return (
      <div>
        <Select
          name="currency"
          labelText="Moeda"
          id="expense-currency"
          options={ filterCurrencies }
          onChange={ this.handleChange }
        />
        <Select
          name="method"
          labelText="Método de pagamento"
          id="expense-payment"
          options={ methods }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          labelText="Tag"
          id="expense-category"
          options={ tags }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderInputs() {
    return (
      <div>
        <Input
          type="number"
          name="value"
          placeholder="0"
          className="expense-input"
          id="expense-value"
          labelText="Valor"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          className="expense-input"
          id="expense-description"
          labelText="Descrição"
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderForm() {
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          { this.renderInputs() }
          { this.renderSelects() }
          <Button
            name="expense-submit"
            id="expense-submit"
            text="Adicionar despesa"
          />
        </form>
      </section>
    );
  }

  render() {
    return (
      <main>
        { this.renderForm() }
        <Table />
      </main>
    );
  }
}

Expenses.propTypes = {
  json: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinsThunk: () => dispatch(apiWithThunk()),
  expenses: (payload) => dispatch(fetchExpenseAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
