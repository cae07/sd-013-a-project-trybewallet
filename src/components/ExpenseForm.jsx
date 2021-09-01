import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class ExpenseForm extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { currencies } = this.props;
    if (!currencies) return <p>Loading...</p>;
    return (
      <form>
        <label htmlFor="input-value">
          Valor
          <input
            type="number"
            id="input-value"
          />
        </label>
        <label htmlFor="input-description">
          Descrição
          <input
            type="text"
            id="input-description"
          />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select
            name="currency"
            id="select-currency"
          >
            { currencies.map((curr) => <option key={ curr }>{ curr }</option>)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de Pagamento
          <select name="payment" id="payment-method">
            <option value="money">Dinheiro</option>
            <option value="creditcard">Cartão de Crédito</option>
            <option value="debitcard">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select name="tag" id="select-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="locomotion">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
