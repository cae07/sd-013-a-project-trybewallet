import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" name="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input id="descricao" type="text" name="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="moeda">
              {}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento" name="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="alimentacao">alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>

      </>
    );
  }
}

export default Wallet;
