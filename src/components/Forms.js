import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option>moeda 1</option>
              <option>moeda 2</option>
            </select>
          </label>
          <label htmlFor="cartao">
            Método de pagamento
            <select id="cartao">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            tag
            <select id="categoria">
              <option>Lazer</option>
              <option>Alimentação</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;
