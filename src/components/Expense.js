import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies, saveExpense } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  onSubmitForm() {
    const { dispatchExpense, expenses } = this.props;

    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchExpense
    this.setState({
      id: expenses.length + 1,
    });
    dispatchExpense(this.state);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  methodInput() {
    return (
      <label htmlFor="método de pagamento">
        Método de pagamento:
        <select
          id="método de pagamento"
          name="method"
          onChange={ this.handleChange }
          className="form__field"
        >
          { paymentMethods.map((method) => (
            <option key={ method }>{ method }</option>)) }
        </select>
      </label>
    );
  }

  descriptionInput() {
    return (
      <label htmlFor="descrição">
        Descrição:
        <input
          type="text"
          id="descrição"
          name="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <div className="formExpense">
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              className="inputValueForm"
              type="text"
              id="valor"
              name="value"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select type="text" name="currency" id="moeda" onChange={ this.handleChange }>
              { currencies
                .filter((index) => index !== 'USDT')
                .map((coin) => (<option key={ coin }>{ coin }</option>)) }
            </select>
          </label>
          { this.methodInput() }
          <label htmlFor="tag">
            Tag:
            <select
              onChange={ this.handleChange }
              id="tag"
              name="tag"
              className="form__field"
            >
              { tags.map((tag) => (<option key={ tag }>{ tag }</option>)) }
            </select>
          </label>
          { this.descriptionInput() }
          <button
            type="button"
            className="btn float-right despesa_btn"
            onClick={ this.onSubmitForm }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Expense.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (stateStore) => ({
  currencies: stateStore.wallet.currencies,
  expenses: stateStore.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchApiCurrencies()),
  dispatchExpense: (expense) => dispatch(saveExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
