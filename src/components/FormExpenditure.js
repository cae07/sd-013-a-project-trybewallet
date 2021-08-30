import React from 'react';
import Input from './Input';
import Select from './Select';

const paymentOptions = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const coinType = [];

class FormExpenditure extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      description: '',
      coin: '',
      payments: '',
      tag: '',
    };
  }

  render() {
    const { valor, description, payments, coin, tag } = this.state;
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
            defaultOption="Selecione"
            onchange="Kek"
            value={ coin }
            label="Moeda: "
            id="coin"
            options={ coinType }
          />
          <Select
            defaultOption="Selecione"
            onchange="Kek"
            value={ payments }
            label="Método de Pagamento: "
            id="payments"
            options={ paymentOptions }
          />
          <Select
            defaultOption="Selecione"
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
