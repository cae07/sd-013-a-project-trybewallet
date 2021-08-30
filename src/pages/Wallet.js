import React from 'react';
import { Header, Input, Select } from '../componets';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Input name="valor" type="number" />
          <Input name="descrição" type="text" />
          <Select name="Moeda" data="" />
          <Select name="Método de pagamento" data={ paymentMethod } />
          <Select name="Tag" data={ category } />
        </div>
      </div>
    );
  }
}

export default Wallet;
