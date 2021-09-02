import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchExpenses, getSum } from '../actions';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCur } = this.props;
    fetchCur();
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  sumExpenses() {
    let count = 0;
    const { expenses } = this.props;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      count += (Number(value) * Number(exchangeRates[currency].ask));
    });
    return count;
  }

  handleClick() {
    const { fetchExp, expenses, totalSum } = this.props;
    const id = expenses.length;
    fetchExp(this.state, id);
    totalSum(this.sumExpenses());
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    return (
      <form>
        <label
          htmlFor="value"
        >
          Valor
          <input
            type="number"
            min="0"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <Select
          handleChange={ this.handleChange }
          method={ method }
          currency={ currency }
          tag={ tag }
        />
        <label
          htmlFor="description"
        >
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCur: () => dispatch(fetchCurrencies()),
  fetchExp: (payload, id) => dispatch(fetchExpenses(payload, id)),
  totalSum: (payload) => dispatch(getSum(payload)),
});

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  total: wallet.total,
  currencies: wallet.currencies,
});

Form.propTypes = {
  fetchCur: PropTypes.func.isRequired,
  fetchExp: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalSum: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
