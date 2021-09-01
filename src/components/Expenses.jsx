import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apiWithThunk } from '../actions';
import Input from './Input';
import Select from './Select';

class Expenses extends React.Component {
  componentDidMount() {
    const { json } = this.props;
    json();
  }

  render() {
    const { currencies } = this.props;
    const getCurrencies = Object.keys(currencies);
    const filterCurrencies = getCurrencies.filter((item) => item !== 'USDT');

    return (
      <section>
        <form>
          <Input
            type="number"
            name="expense-value"
            placeholder="0"
            className="expense-input"
            id="expense-value"
            labelText="Valor"
          />
          <Input
            type="text"
            name="expense-description"
            className="expense-input"
            id="expense-description"
            labelText="Descrição"
          />
          <Select
            name="expense-currency"
            labelText="Moeda"
            id="expense-currency"
            options={ filterCurrencies }
          />
          <Select
            name="expense-payment"
            labelText="Método de pagamento"
            id="expense-payment"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            name="expense-category"
            labelText="Tag"
            id="expense-category"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>
      </section>
    );
  }
}

Expenses.propTypes = {
  json: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  json: () => dispatch(apiWithThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
