import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiWithThunk, submitAction } from '../actions';
import Input from './Input';
import Select from './Select';
import Button from './Button';

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

    this.inputs = this.inputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { // Retorna o JSON com as moedas.
    const { getCoinsThunk } = this.props;
    getCoinsThunk();
  }

  handleChange({ target }) { // Salva os valores dos inputs no estado local
    const { name, value } = target;
    this.setState({
      expense: {
        [name]: value,
      },
    });
  }

  handleClick(event) { // Salvar expense dentro de expenses
    event.preventDefault();

    this.setState((prevState) => ({
      expense: {
        id: prevState.id + 1,
      },
    }));
  }

  handleSubmit() { // Enviar expenses para o estado global
    const { expense } = this.state; // Traz expense do estado local
    const { expenses } = this.props; // Traz a chave expenses do mapDispatchToProps
    const setExpenses = []; // Cria o array vazio para ser armazenado os valores dos inputs
    const expenseState = setExpenses.push(expense); // Coloca os valores do estado local no array criado
    console.log(expenseState); // Não está retornando nada, nem undefined.

    expenses(expenseState); // Salva os valores do array no expenses do mapDispatchToProps
  }

  inputs() {
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

  render() {
    const { currencies } = this.props;
    const getCurrencies = Object.keys(currencies);
    const filterCurrencies = getCurrencies.filter((item) => item !== 'USDT');

    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          { this.inputs() }
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
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.handleChange }
          />
          <Select
            name="tag"
            labelText="Tag"
            id="expense-category"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            onChange={ this.handleChange }
          />
          <Button
            name="expense-submit"
            id="expense-submit"
            text="Adicionar despesa"
            onClick={ this.handleClick }
          />
        </form>
      </section>
    );
  }
}

Expenses.propTypes = {
  json: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinsThunk: () => dispatch(apiWithThunk()),
  expenses: (state) => dispatch(submitAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
