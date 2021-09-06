import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses } from '../actions';
import apiWithThunk from '../actions/actionsThunk';
import { tags, methods } from '../utils/options';
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
    // this.handleClick = this.handleClick.bind(this);
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
          <Button
            name="expense-submit"
            id="expense-submit"
            text="Adicionar despesa"
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
  expenses: (state) => dispatch(addExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
