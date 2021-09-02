import React from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <InputField
            name="Valor"
            testid="valor-input"
            type="text"
            placeholder="Valor"
            onChange={ this.onChange }
            value="0"
          />
          <InputField
            name="Descrição"
            testid="descrição-input"
            type="text"
            placeholder="Descrição"
            onChange={ this.onChange }
            value="0"
          />
          <SelectField
            name="Moeda"
            options={ [] }
            onChange={ this.onChange }
            value=""
          />
          <SelectField
            name="Método de pagamento"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.onChange }
            value=""
          />
          <SelectField
            name="Tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            onChange={ this.onChange }
            value=""
          />
        </form>
      </div>
    );
  }
}

export default Wallet;
