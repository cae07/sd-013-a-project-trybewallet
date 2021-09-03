import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="despesas">
          Valor
          <input id="despesas" type="number" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" type="text" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            vazio
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select id="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

export default connect(null, null)(Form);
