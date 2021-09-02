import React from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
    this.state = {
      quotation: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate(prevProps, prevState) {
    const { quotation } = this.state;
    if (!prevState.quotation.length && quotation !== []) {
      const FILTER = ['USDT'];
      this.filterOptions(quotation, FILTER);
    }
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  filterOptions(quotationOptions = {}, properties = []) {
    properties.forEach((property) => delete quotationOptions[property]);
    this.setState({ quotation: Object.values(quotationOptions) });
  }

  async fetchAPI() {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const quotations = await request.json();
      this.setState({ quotation: quotations });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quotation } = this.state;
    if (!quotation.length) {
      return <Header />;
    }
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
            options={ quotation }
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
