import React, { Component } from 'react';

class CurrencySelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        this.setState({
          currencies: Object.keys(data),
        });
      });
  }

  render() {
    const { state: { currencies } } = this;
    return (
      <label htmlFor="currency-select">
        Moeda
        <select name="currency-select" id="currency-select">
          <option value="" checked disabled>Selecione uma moeda</option>
          {
            currencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))
          }
        </select>
      </label>
    );
  }
}

export default CurrencySelect;
