import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { sendCurrenciesToStore } = this.props;
    sendCurrenciesToStore();
  }

  renderCurrencyNames() {
    const { currencyList } = this.props;
    const currencyNames = Object.keys(currencyList[0]);

    return currencyNames.map((currencyName) => (
      <option key={ currencyName } value={ currencyName }>{currencyName}</option>
    ));
  }

  render() {
    return (
      <form>

        <label htmlFor="amount-input">
          Valor:
          <input id="amount-input" type="text" />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input id="description-input" type="text" />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select id="currency-input">
            {this.renderCurrencyNames()}
          </select>
        </label>

        <label htmlFor="payment-input">
          Método de Pagamento:
          <select id="payment-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag:
          <select id="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  sendCurrenciesToStore: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencyList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  sendCurrenciesToStore: PropTypes.func.isRequired,
};
