import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="form-header">
        <fieldset>
          <label htmlFor="valor">
            Valor:
            <input
              type="text"
              name="valor"
              id="valor"
            />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input
              type="text"
              name="descrição"
              id="descrição"
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              <option value="select">selecione</option>
            </select>
          </label>
          <label htmlFor="metodo-de-pgt">
            Método de pagamento:
            <select name="metodo-de-pgt" id="metodo-de-pgt">
              <option value="money">Dinheiro</option>
              <option value="cred-card">Cartão de crédito</option>
              <option value="debt-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            TAG:
            <select name="tag" id="tag">
              <option value="food">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="job">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="healty">Saúde</option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }
}

export default Form;
