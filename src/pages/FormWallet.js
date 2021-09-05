import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valorForm">
            Valor
            <input
              id="valorForm"
              type="text"
              name="valor"
              value=""
            />
          </label>
          <label htmlFor="descriçãoForm">
            Descrição
            <input
              id="descriçãoForm"
              type="text"
              name="descrição"
              value=""
            />
          </label>
          <label htmlFor="moeda">
            <select id="moeda">
              Moeda
              <option>a</option>
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crádito">Cartão de crádito</option>
              <option value="Cartão de débito">Cartão de débito</option>
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
      </div>
    );
  }
}

export default FormWallet;
