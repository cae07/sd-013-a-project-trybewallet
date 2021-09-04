import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>header</h1>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input data-testid="value" type="number" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select data-testid="currency">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="brl">BRL</option>
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select data-testid="paymentMethod">
              <option value="deposit">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de debito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select data-testid="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
