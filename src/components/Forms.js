import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiInfo, refreshItems } from '../actions';
import TextInput from './TextInput';
import Select from './Select';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ id, value }) {
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { props: {
      replaceExpenses, expenses, getCurrency, currencies }, state } = this;
    await getCurrency();
    const newExpense = { ...state, exchangeRates: currencies, id: expenses.length };
    replaceExpenses([...expenses, newExpense]);
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { props: { currencies }, handleChange, handleClick } = this;
    const currenciesArray = Object.keys(currencies);
    const { value, description, currency, method, tag } = this.state;

    return (
      <form action="">
        <TextInput
          label="Valor"
          value={ value }
          id="value"
          onChange={ handleChange }
        />
        <TextInput
          label="Descrição"
          value={ description }
          id="description"
          onChange={ handleChange }
        />
        <Select
          id="currency"
          value={ currency }
          label="Moeda"
          onChange={ handleChange }
          items={ currenciesArray }
        />
        <Select
          id="method"
          value={ method }
          label="Método de pagamento"
          onChange={ handleChange }
          items={ methods }
        />
        <Select
          id="tag"
          value={ tag }
          onChange={ handleChange }
          items={ tags }
          label="Tag"
        />
        <input type="button" value="Adicionar despesa" onClick={ () => handleClick() } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getApiInfo()),
  replaceExpenses: (payload) => dispatch(refreshItems(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Forms.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  replaceExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    USD: PropTypes.shape({ code: PropTypes.string }),
  }).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
