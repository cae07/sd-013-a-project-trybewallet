import React from 'react';

class FormsWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-value">
          Valor:
          <input type="text" name="name" id="input-value" />
        </label>

        <label htmlFor="select-currency">
          Moeda:
          <select name="currency" id="select-currency">
            <option value="">EUR</option>
            <option value="">USD</option>
          </select>
        </label>

        <label htmlFor="select-tag">
          Tag:
          <select name="tag" id="select-tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>

        <label htmlFor="input-description">
          Descrição:
          <input type="text" name="description" id="input-description" />
        </label>

        <button type="submit">Adicionar Despesas</button>
      </form>
    );
  }
}

export default FormsWallet;
