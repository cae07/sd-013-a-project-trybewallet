import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpense } from '../actions';
import CurrencyBox from './CurrencyBox';
import DescriptionInput from './DescriptionInput';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
    };
  }

  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addNewExpense } = this.props;
    addNewExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <DescriptionInput name="description" handleChange={ this.handleChange } />
        <CurrencyBox currencies={ currencies } handleChange={ this.handleChange } />
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleSubmit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrencies: () => dispatch(fetchCurrencies()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

ExpenseForm.defaultProps = {
  currencies: [],
};

ExpenseForm.propTypes = {
  loadCurrencies: PropTypes.func.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape(
    {},
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
