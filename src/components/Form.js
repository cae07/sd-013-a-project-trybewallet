import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
import Currency from './Currency';

class Form extends React.Component {
  componentDidMount() {
    const { optionCurrency } = this.props;
    optionCurrency();
  }

  render() {
    const { currencies } = this.props;
    const filterCurrencies = currencies.filter((currency) => currency !== 'USDT');
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <label htmlFor="expense">
          Valor
          <input
            type="text"
            id="expense"
            name="expense"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
          />
        </label>
        <Currency filterCurrencies={ filterCurrencies } />
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select name="Tag" id="Tag">
            { tags.map((tag, key) => <option key={ key }>{ tag }</option>)}
          </select>
        </label>
      </div>
    );
  }
}

Form.propTypes = {
  optionCurrency: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  optionCurrency: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
