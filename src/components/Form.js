import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchExpenses, getSum } from '../actions';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sumTotal = this.sumTotal.bind(this);
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

  sumTotal() {
    const { expenses } = this.props;
    console.log(expenses);
    return expenses.reduce((acc, item) => {
      const convertValue = item.exchangeRates[item.moeda].ask;
      acc += item.moeda * convertValue;
      return acc;
    }, 0);
  }

  handleClick() {
    const { fetchExp, expenses } = this.props;
    const id = expenses.length;
    fetchExp(this.state, id);
    this.sumTotal();
  }

  render() {
    const { valor, descricao, pagamento, moeda, tag } = this.state;
    return (
      <form>
        <label
          htmlFor="valor"
        >
          Valor
          <input
            type="number"
            min="0"
            id="valor"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <Select
          handleChange={ this.handleChange }
          pagamento={ pagamento }
          moeda={ moeda }
          tag={ tag }
        />
        <label
          htmlFor="descricao"
        >
          Descrição
          <input
            type="text"
            id="descricao"
            value={ descricao }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
