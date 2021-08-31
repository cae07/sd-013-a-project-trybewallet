import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletBody extends Component {
  constructor() {
    super();

    this.filterCurrencies = this.filterCurrencies.bind(this);
  }

  //  Depois de olhar muito e não entender porque minha função não funcionava, procurei no PR do Gaspar novamente e percebi que só usando o map, não funcionaria, usando Object.keys, o método retorna um novo array
  // e por isso funcionaria
  filterCurrencies() {
    const { currencies } = this.props;
    return Object.keys(currencies).map((currency) => (
      <option key={ currency } value={ currency }>{currency}</option>
    ));
  }

  render() {
    const { value, d, method, tag, handleChange, crrncy, saveExpense } = this.props;
    return (
      <fieldset>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label onChange={ handleChange } htmlFor="d">
          Descrição
          <input id="d" type="text" name="description" value={ d } />
        </label>
        <label htmlFor="moeda" onChange={ handleChange } value={ crrncy }>
          Moeda
          <select name="currency" id="moeda">
            {this.filterCurrencies()}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ handleChange } value={ method }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" tag onChange={ handleChange } value={ tag }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ saveExpense }>Adicionar Despesa</button>
      </fieldset>
    );
  }
}

WalletBody.propTypes = {
  value: PropTypes.number.isRequired,
  d: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  crrncy: PropTypes.string.isRequired,
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletBody);
