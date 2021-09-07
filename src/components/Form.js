import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderSelectTag = this.renderSelectTag.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderPayment() {
    const { handleChange } = this;

    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          name="payment"
          onChange={ handleChange }
        >
          <option value="money">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderSelectTag() {
    const { handleChange } = this;

    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ handleChange }
        >
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="tranport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { handleChange, handleSubmit, renderPayment, renderSelectTag,
      state: { value, description } } = this;

    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            name="value"
            onChange={ handleChange }
            type="number"
            value={ value }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            id="description"
            name="description"
            onChange={ handleChange }
            type="text"
            value={ description }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            onChange={ handleChange }
          >
            vazio
          </select>
        </label>

        { renderPayment() }
        { renderSelectTag() }
      </form>
    );
  }
}

export default Form;
