import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrencies } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
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
    let { id } = this.state;
    const { getExchangeRates, updateExpenses } = this.props;
    getExchangeRates();
    const { resultData } = this.props;
    this.setState({
      id: id += 1,
      exchangeRates: { ...resultData },
    }, () => {
      updateExpenses(this.state);
    });
  }

  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="valor">
            Valor
            <input type="text" name="value" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="description" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="currency" id="moeda">
              {currencies.filter((curr) => curr !== 'USDT').map(
                (curr) => <option key={ curr } value={ curr }>{ curr }</option>,
              )}
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento
            <select name="method" id="metodoDePagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
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
  }).isRequired,
  getExchangeRates: propTypes.func.isRequired,
  updateExpenses: propTypes.func.isRequired,
  resultData: propTypes.objectOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
