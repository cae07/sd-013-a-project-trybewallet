import React from 'react';
// import serviceAPI from '../services';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      payMethod: '',
      tag: '',
      currencies: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  //
  async componentDidMount() {
    this.fetchCurrencyApi();
  }

  onChange({ target }) {
    const { id, value } = target;
    // console.log(id);
    this.setState({
      [id]: value,
    });
  }

  async fetchCurrencyApi() {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(api).then((response) => response.json());
    const noUSDT = Object.keys(result).filter((key) => key !== 'USDT');
    this.setState({ currencies: noUSDT });
  }

  render() {
    const { value, description, payMethod, tag, currencies } = this.state;
    return (
      <form>
        <fieldset>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" value={ value } onChange={ this.onChange } />
          </label>

          <label htmlFor="des">
            Descrição
            <textarea id="description" value={ description } onChange={ this.onChange } />
          </label>

          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency">
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))}
            </select>
          </label>

          <label htmlFor="payMethod">
            Método de Pagamento:
            <select id="payMethod" value={ payMethod } onChange={ this.onChange }>
              <option value="cash">Dinheiro</option>
              <option value="credicard">Cartão de Crédito</option>
              <option value="card">Cartão de Débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select id="tag" value={ tag } onChange={ this.onChange }>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="health">Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despesa</button>

        </fieldset>

      </form>

    );
  }
}

export default ExpensesForm;
