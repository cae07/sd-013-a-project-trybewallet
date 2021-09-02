import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class HeaderForm extends Component {
  render() {
    const { currencies, isFetching, currencyValue, valueCost, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            value={ valueCost }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select
            name="currencies"
            id="currencies"
            value={ currencyValue }
            onChange={ (e) => handleChange(e, true) }
          >
            {isFetching
              ? <Loading />
              : currencies
                .map((currency, index) => <option value={ currency }key={ index }>{ currency }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses">
          Tag
          <select name="expenses" id="expenses" >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(HeaderForm);
