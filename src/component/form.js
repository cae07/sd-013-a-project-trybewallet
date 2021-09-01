import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseThunk } from '../actions';
import fetchCurrencies from '../requireAPI';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      despesaAtual: {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
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

  selectedMethod(despesaAtual) {
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select
          id="method"
          value={ despesaAtual.method }
          name="method"
          onChange={ this.handleChange }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
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
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  handleClick(despesaAtual, addExpense) {
    return (
      addExpense(despesaAtual),
      this.setState((previouState) => ({
        despesaAtual: {
          id: previouState.despesaAtual.id + 1,
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
          value: 0,
          description: '',
        },
      }))
    );
  }

  render() {
    const { data, despesaAtual } = this.state;
    const { addExpense } = this.props;
    return (
      <form>
        { this.inputValue(despesaAtual) }
        { this.selectCurrency(data, despesaAtual) }
        { this.selectedMethod(despesaAtual) }
        { this.selectTag(despesaAtual) }
        <button
          type="button"
          onClick={ () => this.handleClick(despesaAtual, addExpense) }
        >
          Adicionar despesa
        </button>
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

Form.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
