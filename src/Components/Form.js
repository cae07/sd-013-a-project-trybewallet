import React from 'react';
import { InputSelect } from './InputSelect';
import { InputText } from './InputText';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Form extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchApi() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await api.json();
    const allCurrencie = Object.keys(json);
    const currenciesWithoutUsdt = allCurrencie.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: currenciesWithoutUsdt,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <InputText />
        <InputSelect currencies={ currencies } />
      </form>
    );
  }
}

export default Form;
