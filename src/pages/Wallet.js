import React from 'react';
import { Header, Input, Select } from '../componets';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currently: '',
    };
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await api.json();
    const data = await result;
    this.setState({
      currently: Object.keys(data)
        .filter((a) => a !== 'USDT'),
    });
  }

  render() {
    const { currently } = this.state;
    return (
      <div>
        <Header />
        <div>
          <Input name="valor" type="number" />
          <Input name="descrição" type="text" />
          <Select name="Moeda" data={ currently } />
          <Select name="Método de pagamento" data={ paymentMethod } />
          <Select name="Tag" data={ category } />
        </div>
      </div>
    );
  }
}

export default Wallet;
