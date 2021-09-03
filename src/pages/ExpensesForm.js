import React from 'react';
// import serviceAPI from '../services';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      coin: 'USD',
      payMethod: '',
      tag: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { id, value } = target;
    // console.log(id);
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { value, description, coin, payMethod, tag } = this.state;
    return (
      <form>

        <label htmlFor="value">
          Valor
          <input type="number" id="value" value={ value } onChange={ this.onChange } />
        </label>

        <label htmlFor="des">
          Descrição
          <textarea id="description" value={ description } onChange={ this.onChange } />
        </label>

        <label htmlFor="coin">
          Moeda
          <select id="coin" value={ coin } onChange={ this.onChange }>
            <option value={ coin }>{coin}</option>
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

      </form>

    );
  }
}

export default ExpensesForm;
