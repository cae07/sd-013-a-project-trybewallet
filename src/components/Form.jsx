import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="walletForm">
          Nome:
          <input type="text" name="name" id="walletForm" />
        </label>
        {/* <label htmlFor="">valor</label> */}
        {/* Um campo de texto para adicionar a descrição da despesa. */}
        {/* <label htmlFor="">desc</label> */}
        {/* Um campo de select para adicionar em qual moeda será registrada a despesa. */}
        {/* <label htmlFor="">moeda</label> */}
        {/* <select name="" id="" /> */}
        {/* Um campo para adicionar qual método de pagamento será utilizado. */}
        <label htmlFor="payment">
          metodo de pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
