import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class WalletForm extends React.Component {
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

  filterCurrency() {
    const { apiResponse } = this.state;
    const init = Object.keys(apiResponse);
    const filteredCurrencys = init.filter((initial) => initial !== 'USDT');
    return filteredCurrencys;
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

  valueLabel() {
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

  descriptionLabel() {
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

  currencyLabel() {
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
            .map((option, index) => (<option key={ index }>{ option }</option>)) }
        </select>
      </label>
    );
  }

  methodOfPaymentLabel() {
    const { expenses: { payment } } = this.state;
    return (
      <label htmlFor="methodOfPayment">
        Método de pagamento
        <select
          name="method"
          id="payment"
          value={ payment }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagLabel() {
    const { expenses: { tag } } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { fetchApiWallet } = this.props;
    const { expenses } = this.state;
    return (
      <div>
        <form>
          { this.valueLabel() }
          { this.descriptionLabel() }
          { this.currencyLabel() }
          { this.methodOfPaymentLabel() }
          { this.tagLabel() }
          <button
            type="button"
            onClick={ () => fetchApiWallet(expenses) }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiWallet: (state) => dispatch(fetchApi(state)),
});

WalletForm.propTypes = ({
  fetchApiWallet: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(WalletForm);
