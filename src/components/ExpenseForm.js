// React
import React, { Component } from 'react';

// Children
import CurrencySelect from './CurrencySelect';
import MethodSelect from './MethodSelect';
import TagSelect from './TagSelect';

// Formulário de adição de Despesa
class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      exchangeRates: {},
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.setExpenseData = this.setExpenseData.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  setExpenseData({ target: { name, value } }) {
    this.setState((previous) => {
      const { exchangeRates } = previous;
      /*
       O id da despesa deve ser um número sequencial, começando em 0.
       Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2,
       e assim por diante.
      */
      const prevLength = previous.expenses.length; // primeiro = 0
      return ({
        ...previous,
        expenses: [
          {
            id: prevLength,
            [name]: value,
            exchangeRates,
          },
        ],
      });
    });
  }

  fetchCurrencies() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        this.setState({
          exchangeRates: data,
        });
      });
  }

  render() {
    const { state: { exchangeRates } } = this;
    return (
      <form className="ExpenseForm">
        <fieldset>
          <legend>Despesa</legend>
          <label htmlFor="expense-amount">
            Valor
            <input
              type="text"
              name="value"
              id="expense-amount"
              placeholder="Valor"
              onChange={ (evt) => this.setExpenseData(evt) }
            />
          </label>
          <label htmlFor="expense-description">
            Descrição
            <textarea
              description="value"
              id="expense-description"
              placeholder="Descreva a sua despesa..."
            />
          </label>
          <CurrencySelect
            currencies={ Object.keys(exchangeRates) }
          />
          <MethodSelect />
          <TagSelect />
        </fieldset>
      </form>
    );
  }
}

export default ExpenseForm;
