import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrencies } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { getExchangeRates, updateExpenses, wallet: { resultData } } = this.props;
    getExchangeRates();
    const timeOut = 500;
    setTimeout(() => {
      let { id } = this.state;
      this.setState({
        id: id += 1,
        exchangeRates: [{ ...resultData }],
      }, () => {
        updateExpenses(this.state);
      });
    }, timeOut);
  }

  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="valor">
            Valor
            <input type="text" name="value" id="valor" onChange={ this.handleChange } />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input
              type="text"
              name="description"
              id="descrição"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="currency" id="moeda" onChange={ this.handleChange }>
              {currencies.filter((curr) => curr !== 'USDT').map(
                (curr) => <option key={ curr } value={ curr }>{ curr }</option>,
              )}
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento
            <select name="method" id="metodoDePagamento" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(fetchCurrencies()),
  updateExpenses: (object) => dispatch(addExpense(object)),
});

ExpenseForm.propTypes = {
  wallet: propTypes.shape({
    currencies: propTypes.arrayOf(propTypes.string),
    resultData: propTypes.objectOf(propTypes.string).isRequired,
  }).isRequired,
  getExchangeRates: propTypes.func.isRequired,
  updateExpenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
