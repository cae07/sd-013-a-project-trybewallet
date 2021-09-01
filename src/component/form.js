import React from 'react';
import { connect } from 'react-redux';
import { addExpenseThunk } from '../actions';
import fetchCurrencies from '../requireAPI';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      despesaAtual: {
        value: 0,
        description: '',
        currency: 'USD',
        payMethod: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.insertData();
  }

  async fetchMoedas() {
    const data = await fetchCurrencies();
    return data;
  }

  async insertData() {
    const moedas = await this.fetchMoedas();
    const moedasName = Object.keys(moedas);
    this.setState({
      data: moedasName,
    });
  }

  handleChange({ target: { name, value } }) {
    const { despesaAtual } = this.state;
    this.setState({
      despesaAtual: {
        ...despesaAtual,
        [name]: value,
      },
    });
  }

  inputValue(despesaAtual) {
    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            value={ despesaAtual.value }
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            value={ despesaAtual.description }
            name="description"
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  selectCurrency(data, despesaAtual) {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          value={ despesaAtual.currency }
          onChange={ this.handleChange }
        >
          {data.map((item) => (
            <option data-testid={ item } key={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  selectPayMethod(despesaAtual) {
    return (
      <label htmlFor="payMethod">
        Método de Pagamento:
        <select
          id="payMethod"
          value={ despesaAtual.payMethod }
          name="payMethod"
          onChange={ this.handleChange }
        >
          <option id="payMethod">Dinheiro</option>
          <option id="payMethod">Cartão de Crédito</option>
          <option id="payMethod">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  selectTag(despesaAtual) {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          value={ despesaAtual.tag }
          name="tag"
          onClick={ this.handleChange }
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

  handleClick(despesaAtual, addExpense) {
    return (
      addExpense(despesaAtual),
      this.setState(() => ({
        despesaAtual: {
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
          value: '0',
          description: '',
        },
      }))
    );
  }

  render() {
    const { data, despesaAtual } = this.state;
    return (
      <form>
        { this.inputValue(despesaAtual) }
        { this.selectCurrency(data, despesaAtual) }
        { this.selectPayMethod(despesaAtual) }
        { this.selectTag(despesaAtual) }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (despesaAtual) => dispatch(addExpenseThunk(despesaAtual)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
