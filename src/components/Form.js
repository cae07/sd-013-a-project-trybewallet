import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletAction } from '../actions';
import InputsForm from './InputsForm';
import SelectsForm from './SelectsForm';

let id = 0;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      totalExpenses: 0,
    };
    this.handleSetState = this.handleSetState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRestartState = this.handleRestartState.bind(this);
  }

  componentDidMount() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        this.handleSetState(Object.keys(data));
      });
  }

  handleSetState(data) {
    this.setState({
      currencies: data,
    });
  }

  // Código copiado do Gabriel Gaspar;
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Função criada com a ajuda do Victor Diniz;
  async handleRestartState() {
    const { value, description, currency, method, tag, totalExpenses } = this.state;
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    const fetchExpenses = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => data);
    const currentWalletState = {
      id,
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates: {
        ...fetchExpenses,
      },
    };
    id += 1;
    const { dispatchExpensesToState } = this.props;
    dispatchExpensesToState(currentWalletState);

    let currTotalExp = value * fetchExpenses[currency].ask;
    currTotalExp = Math.round((currTotalExp + totalExpenses) * 100) / 100;
    this.setState({
      totalExpenses: currTotalExp,
    });
  }

  render() {
    const {
      currencies, value, description, currency, method, tag, totalExpenses } = this.state;
    const { handleChange, handleRestartState } = this;
    const { email } = this.props;
    return (
      <div>
        <div>
          <h4 data-testid="email-field">{ email }</h4>
          <div data-testid="total-field">{ totalExpenses }</div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
        <form>
          <InputsForm
            value={ value }
            description={ description }
            onChange={ handleChange }
          />
          <SelectsForm
            currencies={ currencies }
            currency={ currency }
            method={ method }
            tag={ tag }
            onChange={ handleChange }
          />
        </form>
        <button
          type="button"
          onClick={ handleRestartState }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchExpensesToState: (currentWalletState) => (
    dispatch(walletAction(currentWalletState))),
});

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Form.propTypes = {
  dispatchExpensesToState: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
