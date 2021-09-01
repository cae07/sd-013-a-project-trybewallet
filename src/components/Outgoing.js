import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, saveExpense } from '../actions';

class Outgoing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit() {
    const { expenses, setExpense } = this.props;
    const id = expenses.length === 0 ? 0 : expenses.length;
    setExpense(id, this.state);
    this.setState({
      value: 1,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  renderTagSelect(handleChange, tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select onChange={ handleChange } value={ tag } name="tag" id="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderMethodSelect(handleChange, method) {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          onChange={ handleChange }
          value={ method }
          name="method"
          id="method"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const arrCurrencies = Object.keys(currencies);
    arrCurrencies.splice(1, 1);
    const { value, description, currency, method, tag } = this.state;
    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            value={ value }
            id="value"
            type="number"
            min="1"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ this.handleChange }
            value={ description }
            id="description"
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
            id="currency"
          >
            {arrCurrencies.map((currencyName) => (
              <option
                key={ currencyName }
                value={ currencyName }
              >
                {currencyName}
              </option>))}
          </select>
        </label>
        {this.renderMethodSelect(this.handleChange, method)}
        {this.renderTagSelect(this.handleChange, tag)}
        <button onClick={ this.handleSubmit } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  setExpense: (id, payload) => dispatch(saveExpense(id, payload)),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

Outgoing.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Outgoing);
