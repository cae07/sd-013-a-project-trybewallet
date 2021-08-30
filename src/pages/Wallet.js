import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <span data-testid="email-field">email: AQUI ENTRA O VALOR</span>
          <span data-testid="total-field">............Valor inicial 0</span>
          <span data-testid="header-currency-field"> BRL</span>
        </header>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" />
          </label>
          <label htmlFor="descricao">
            Descricao:
            <input type="text" name="descricao" />
          </label>
          <label htmlFor="moeda">
            <select id="moeda">
              <option>moeda 1</option>
              <option>moeda 2</option>
            </select>
          </label>
          <label htmlFor="cartao">
            <select id="cartao">
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            <select id="categoria">
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

export default Wallet;
