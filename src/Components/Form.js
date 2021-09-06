import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedInputSelect } from './InputSelect';
import { InputText } from './InputText';
import { saveCurrencies } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const { saveCurrenciesOnGlobalState } = this.props;

    saveCurrenciesOnGlobalState(currenciesWithoutUsdt);
  }

  render() {
    return (
      <form>
        <InputText />
        <ConnectedInputSelect />
      </form>
    );
  }
}

Form.propTypes = {
  saveCurrenciesOnGlobalState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrenciesOnGlobalState: (currencies) => {
    // saveEmail vai retornar um objeto com { type: BLA, payload: { email }}
    const actionWithCurrencies = saveCurrencies(currencies);

    // a gente DISPARA esse objeto para o redux
    dispatch(actionWithCurrencies);
  },
});

export default connect(null, mapDispatchToProps)(Form);
