import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: {},
      // loading: true,
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.selectCurrencies = this.selectCurrencies.bind(this);
  }

  componentDidMount() {
    // const { state: { currencies } } = this;
    this.fetchCurrencies();
    // if (currencies) this.selectCurrencies();
  }

  selectCurrencies() {
    const { state: { currencies } } = this;
    const currencyElement = document.getElementById('currency');
    Object.keys(currencies).forEach((currency, key) => {
      if (currency !== 'USDT') {
        console.log(currency);
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        option.id = key;
        currencyElement.appendChild(option);
      }
    });
  }

  async fetchCurrencies() {
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await res.json();
      delete data.USDT;
      if (!res.ok) throw new Error('Fetch failed');
      this.setState({
        currencies: data,
        // loading: false,
      });
      this.selectCurrencies();
    } catch (error) {
      return error.message;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
