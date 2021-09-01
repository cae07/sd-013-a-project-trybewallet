import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyExpense: {
        value: 0,
        description: '',
        currency: 'USD',
        payMethod: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
    this.inputValue = this.inputValue.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.selectPayMethod = this.selectPayMethod.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  inputValue(currencyExpense) {
    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            value={ currencyExpense.value }
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            value={ currencyExpense.description }
            name="description"
          />
        </label>
      </>
    );
  }

  selectCurrency() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          // value={ currencyExpense.currency }
          name="currency"
        >
          <option>Vazio</option>
        </select>
      </label>
    );
  }

  selectPayMethod(currencyExpense) {
    return (
      <label htmlFor="payMethod">
        Método de Pagamento:
        <select
          id="payMethod"
          value={ currencyExpense.payMethod }
          name="payMethod"
        >
          <option id="payMethod">Dinheiro</option>
          <option id="payMethod">Cartão de Crédito</option>
          <option id="payMethod">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  selectTag(currencyExpense) {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          value={ currencyExpense.tag }
          name="tag"
        >
          <option id="tag" value="alimentação">Alimentação</option>
          <option id="tag" value="lazer">Lazer</option>
          <option id="tag" value="trabalho">Trabalho</option>
          <option id="tag" value="transporte">Transporte</option>
          <option id="tag" value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { data, currencyExpense } = this.state;
    return (
      <form>
        { this.inputValue(currencyExpense) }
        { this.selectCurrency(data, currencyExpense) }
        { this.selectPayMethod(currencyExpense) }
        { this.selectTag(currencyExpense) }
      </form>
    );
  }
}

export default Form;
