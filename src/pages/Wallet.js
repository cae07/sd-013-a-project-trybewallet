import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderSelects() {
    return (
      <>
        <Select
          label="Moeda:"
          name="currency"
          options={ ['USD'] }
          onChange={ this.handleChangeInput }
        />
        <Select
          label="Método de pagamento:"
          name="payment"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChangeInput }
        />
        <Select
          label="Tag:"
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChangeInput }
        />
      </>
    );
  }

  render() {
    const { value, description } = this.state;

    return (
      <>
        <Header />
        <form
          onSubmit={ (event) => {
            event.preventDefault();
            console.log(this.state);
          } }
        >
          <Input
            label="Valor:"
            name="value"
            type="text"
            placeholder="00,00"
            test=""
            onChange={ this.handleChangeInput }
            value={ value }
          />
          <Input
            label="Descrição:"
            name="description"
            type="text"
            placeholder="..."
            test=""
            onChange={ this.handleChangeInput }
            value={ description }
          />
          {this.renderSelects()}
        </form>
      </>
    );
  }
}

export default Wallet;
