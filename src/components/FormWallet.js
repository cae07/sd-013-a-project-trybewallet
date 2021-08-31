import React, { Component } from 'react';
import { Inputs, Select } from '.';

class FormWallet extends Component {
  render() {
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <fieldset>
          <Inputs
            name="value"
            page="wallet"
            type="number"
            label="Valor"
            onHandleChange={ this.handleChange }
          />
          <Inputs
            name="description"
            page="wallet"
            type="text"
            label="Descrição"
            onHandleChange={ this.handleChange }
          />
          <Select
            name="coin"
            page="wallet"
            label="Moeda"
            onHandleChange={ this.handleChange }
            options={ [] }
          />
          <Select
            name="payment"
            page="wallet"
            label="Método de pagamento"
            onHandleChange={ this.handleChange }
            options={ payment }
          />
          <Select
            name="categorie"
            page="wallet"
            label="Tag"
            onHandleChange={ this.handleChange }
            options={ tag }
          />
        </fieldset>
      </form>
    );
  }
}

export default FormWallet;
