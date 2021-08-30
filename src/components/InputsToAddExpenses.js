import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InputsToAddExpenses extends Component {
  mapAllCurrency() {
    const { currencies, state: { currency } } = this.props;
    return (
      <select
        value={ currency }
        aria-label="moeda"
        name="currency"
        id="currency"
        onChange={ this.handleChange }
      >
        { currencies && currencies.map((currencyValue) => (
          <option
            key={ currencyValue }
            value={ currencyValue }
          >
            { currencyValue }
          </option>)) }
      </select>
    );
  }

  selectsCurrencyPaymentMethodAndTag() {
    const { handleChange, state: { method, tag } } = this.props;
    return (
      <>
        <label htmlFor="currency">
          Moeda:
          { this.mapAllCurrency() }
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            value={ method }
            aria-label="método de pagamento"
            name="method"
            id="method"
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            value={ tag }
            aria-label="spendDescriptionTag"
            name="tag"
            id="tag"
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { editor, submitForm, editForm, handleChange, state: {
      description, value,
    } } = this.props;
    const submitButton = (
      <button onClick={ submitForm } type="button">
        Adicionar despesa
      </button>
    );
    const editButton = (
      <button onClick={ editForm } type="button">
        Editar despesas
      </button>
    );
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            value={ value }
            type="text"
            name="value"
            id="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            value={ description }
            type="text"
            maxLength="30"
            name="description"
            id="description"
            onChange={ handleChange }
          />
        </label>
        { this.selectsCurrencyPaymentMethodAndTag() }
        { (editor) ? editButton : submitButton }
      </form>
    );
  }
}

const mapStateToProps = (storeState) => ({
  editor: storeState.wallet.editor,
  currencies: storeState.wallet.currencies,
});

InputsToAddExpenses.propTypes = {
  editor: PropTypes.bool,
  handleChange: PropTypes.func,
  submitForm: PropTypes.func,
  editForm: PropTypes.func,
  state: PropTypes.object,
  currencies: PropTypes.array,
}.isRequired;

export default connect(
  mapStateToProps,
)(InputsToAddExpenses);
