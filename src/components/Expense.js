import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies, saveExpense } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { wallet, dispatchExpense } = this.props;
    return (
      <div className="formExpense">
        <form>
          <label htmlFor="Valor">
            Valor:
            <input type="text" id="Valor" label="Valor" onChange={ this.handleChange } />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select type="text" id="Moeda" label="Moeda" onChange={ this.handleChange }>
              { Object.keys(wallet)
                .filter((index) => index !== 'USDT')
                .map((coin) => (<option key={ coin }>{ coin }</option>)) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" onChange={ this.handleChange } className="form__field">
              { paymentMethods.map((method) => (
                <option key={ method }>{ method }</option>)) }
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              onChange={ this.handleChange }
              data-testid="method-input"
              id="tag"
              className="form__field"
            >
              { tags.map((tag) => (<option key={ tag }>{ tag }</option>)) }
            </select>
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" onChange={ this.handleChange } />
          </label>
          <button
            type="button"
            className="btn float-right despesa_btn"
            onClick={ dispatchExpense }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Expense.propTypes = {
  wallet: PropTypes.array,
}.isRequired;

const mapStateToProps = (stateStore) => ({
  wallet: stateStore.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchApiCurrencies()),
  dispatchExpense: (expense) => dispatch(saveExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
