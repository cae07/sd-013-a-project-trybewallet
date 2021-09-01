import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchRates } from '../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.updateRates = this.updateRates.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  updateRates() {
    const { fetchRate, expenses } = this.props;
    const id = expenses.length;
    fetchRate(this.state, id);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    if (!currencies) return <p>Loading...</p>;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            { currencies.map((curr) => <option key={ curr }>{ curr }</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select id="method" value={ method } onChange={ this.handleChange }>
            { methods.map((item, index) => <option key={ index }>{ item }</option>) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            { tagArray.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <button type="button" onClick={ this.updateRates }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  fetchRate: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
  fetchRate: (state, id) => dispatch(fetchRates(state, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
