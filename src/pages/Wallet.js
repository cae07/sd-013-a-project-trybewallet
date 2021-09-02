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
          
        </form>
      </div>
    );
  }
}

export default Wallet;
