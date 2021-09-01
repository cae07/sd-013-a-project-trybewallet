import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      expenses: {
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      },
      apiResponse: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          apiResponse: json,
        });
      });
  }

  // ==== Função que filtra as siglas vindas da requisição API para o select ====
  filterCurrency() {
    const { apiResponse } = this.state;

    const initials = Object.keys(apiResponse);
    const filteredInitials = initials.filter((initial) => initial !== 'USDT');
    return filteredInitials;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState((previousState) => ({
      expenses: {
        ...previousState.expenses,
        [name]: value,
      },
    }));
  }

  // ==== Funções que retornam os inputs/selects ====
  labelValue() {
    const { expenses: { value } } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  labelDescription() {
    const { expenses: { description } } = this.state;

    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  labelCurrency() {
    const { expenses: { currency } } = this.state;

    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { this.filterCurrency()
            .map((option, index) => (
              <option key={ index } value={ option }>{ option }</option>)) }
        </select>
      </label>
    );
  }

  labelPayment() {
    const { expenses: { payment } } = this.state;

    return (
      <label htmlFor="payment">
        Método de Pagamento
        <select
          name="method"
          id="payment"
          value={ payment }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  labelTag() {
    const { expenses: { tag } } = this.state;

    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { fetchApiWallet } = this.props;
    const { expenses } = this.state;

    return (
      <form>
        { this.labelValue() }
        { this.labelDescription() }
        { this.labelCurrency() }
        { this.labelPayment() }
        { this.labelTag() }

        <button
          type="button"
          onClick={ () => fetchApiWallet(expenses) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchApiWallet: (state) => dispatch(fetchApi(state)),
});

Form.propTypes = ({
  fetchApiWallet: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Form);
