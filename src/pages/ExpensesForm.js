import React from 'react';
import serviceAPI from '../services';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      value: 0,
      description: '',
      coin: '',
      payMethod: '',
      tag: '',
    };
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    serviceAPI()
      .then((data) => {
        this.setState({
          results: data,
        });
        console.log(data);
      });
  }

  onChange({ target }) {
    const { id, value } = target;
    // console.log(id);
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { results, value, description, coin, payMethod, tag } = this.state;
    // const { onChange } = this.state;
    console.log(results);
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
            <option value=""> </option>
            {/* {results.map(({ r }) => (<option key={ r.code }>{r.code }</option>))} */}
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
