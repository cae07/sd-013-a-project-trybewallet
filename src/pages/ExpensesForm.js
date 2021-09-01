import React from 'react';
import serviceAPI from '../services';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    serviceAPI()
      .then((data) => {
        this.setState({
          results: data,
        });
        // console.log(data.length);
      });
  }

  render() {
    const { results } = this.state;
    console.log(results);
    return (
      <form>

        <label htmlFor="value">
          Valor
          <input type="text" className="value" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea type="text" className="description" />
        </label>

        <label htmlFor="coin">
          Moeda
          <select className="coin">
            <option value=""> </option>
            {/* {results.map(({ r }) => (<option key={ r.code }>{r.code }</option>))} */}
          </select>
        </label>

        <label htmlFor="payMethod">
          Método de Pagamento:
          <select className="payMethod">
            <option value="cash">Dinheiro</option>
            <option value="credicard">Cartão de Crédito</option>
            <option value="card">Cartão de Débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select className="tag">
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
