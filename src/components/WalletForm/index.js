import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>

        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>

          <label htmlFor="descricao">
            Descrição
            <input name="descricao" type="text" id="descricao" />
          </label>

          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              <option>BRL</option>
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de Pagamento
            <select name="pagamento" id="pagamento">
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Dinheiro</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
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

export default WalletForm;
