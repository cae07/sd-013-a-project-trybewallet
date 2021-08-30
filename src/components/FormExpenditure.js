import React from 'react';
import { Input, Select } from './index';

const paymentOptions = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export async function fetchCurrencies() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return response;
}

class FormExpenditure extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      description: '',
      types: [],
      payments: '',
      tag: '',
    };
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const json = await fetchCurrencies();
    const types = Object.keys(json).filter((key) => key !== 'USDT');
    this.setState({ types });
  }

  render() {
    const { valor, description, payments, coin, tag, types } = this.state;
    return (
      <div>
        <form>
          <Input
            label="Valor:"
            type="text"
            onchange="oi"
            value={ valor }
            id="valor"
          />
          <Select
            onchange="Kek"
            value={ coin }
            label="Moeda: "
            id="coin"
            options={ types }
          />
          <Select
            onchange="Kek"
            value={ payments }
            label="Método de Pagamento: "
            id="payments"
            options={ paymentOptions }
          />
          <Select
            onchange="Kek"
            value={ tag }
            label="Tag: "
            id="tag"
            options={ tagOptions }
          />
          <Input
            label="Descrição:"
            type="text"
            onchange="oi"
            value={ description }
            id="description"
          />
          <input type="submit" value="Add" onClick="lele" />
        </form>
      </div>
    );
  }
}

export default FormExpenditure;
