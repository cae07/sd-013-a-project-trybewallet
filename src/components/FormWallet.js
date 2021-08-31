import React, { Component } from 'react';
import { Inputs, Select } from '.';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyOptions: [],
      // value: '',
      // description: '',
      // currency: '',
      // payment: '',
      // tag: '',
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const obj = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const result = Object.keys(obj).filter((item) => item !== 'USDT');
    this.setState({
      currencyOptions: result,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencyOptions } = this.state;

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
            name="currency"
            page="wallet"
            label="Moeda"
            onHandleChange={ this.handleChange }
            options={ currencyOptions }
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
