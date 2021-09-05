import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: {},
    };
    this.fetchCurrencies();
  }

  currenciesOptions() {
    const select = document.querySelector('#currency');
    const { currencies } = this.state;
    Object.keys(currencies).forEach((currency) => {
      if (currency !== 'USDT') {
        const newOption = document.createElement('option');
        newOption.value = currency;
        newOption.textContent = currency;
        select.appendChild(newOption);
      }
    });
  }

  async fetchCurrencies() {
    const currencies = fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await currencies;
    this.setState({ currencies: await response.json() });
    this.currenciesOptions();
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;
    console.log(Object.keys(currencies));
    return (
      <>
        <header>
          <h4 data-testid="email-field">{ `Email: ${email}` }</h4>
          <h4 data-testid="total-field">{ `Despesa Total R$ ${0}` }</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency"> </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select id="paymentMethod">
              <option value="deposit">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <textarea id="description" cols="30" rows="10">...</textarea>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
