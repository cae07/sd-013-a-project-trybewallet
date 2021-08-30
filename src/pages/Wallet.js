import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserImage from '../img/user.png';
import MapOfTableItens from '../components/MapOfTableItens';
import { requestAPI, saveExpenses } from '../actions';
import InputsToAddExpenses from '../components/InputsToAddExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValues: {
        id: 0,
        value: '0',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: '',
        exchangeRates: {},
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.readWasExpend = this.readWasExpend.bind(this);
  }

  componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      inputsValues: { ...prevState.inputsValues, [name]: value },
    }));
  }

  loginArea() {
    const { email } = this.props;
    return (
      <section>
        <img style={ { width: '50px' } } src={ UserImage } alt="User" />
        <h3 data-testid="email-field">{ email }</h3>
      </section>
    );
  }

  readWasExpend() {
    const { expenses, isFetching } = this.props;
    if (!expenses.length || isFetching) return 0;
    const num = expenses.map(
      ({ value, currency, exchangeRates }) => value * exchangeRates[currency].ask,
    ).reduce((acc, curr) => acc + curr);
    return num.toFixed(2);
  }

  exchangeAndExpenses() {
    return (
      <section>
        <h2>
          Total gasto:
          <span data-testid="total-field">
            { `${this.readWasExpend()}` }
          </span>
        </h2>
        <h2>
          Câmbio:
          <span data-testid="header-currency-field">BRL</span>
        </h2>
      </section>
    );
  }

  submitForm() {
    const { dispatchExpenses } = this.props;
    const { inputsValues } = this.state;
    dispatchExpenses(inputsValues);
    this.setState(() => ({
      inputsValues: {
        id: 0,
        value: '0',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: '',
        exchangeRates: {},
      },
    }));
  }

  subtitle() {
    return (
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
    );
  }

  render() {
    const { inputsValues } = this.state;
    return (
      <>
        <header>
          { this.loginArea() }
          { this.exchangeAndExpenses() }
        </header>
        <section>
          <InputsToAddExpenses
            submitForm={ this.submitForm }
            state={ inputsValues }
          />
        </section>
        <table>
          <thead>{ this.subtitle() }</thead>
          <tbody><MapOfTableItens /></tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (storeState) => ({
  email: storeState.user.email,
  expenses: storeState.wallet.expenses,
  isFetching: storeState.wallet.isFetching,
  idToEdit: storeState.wallet.idToEdit,
});

const mapDispathToProps = (dispatch) => ({
  dispatchAPI: () => dispatch(requestAPI()),
  dispatchExpenses: (payload) => dispatch(saveExpenses(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  isFetching: PropTypes.bool,
  dispatchAPI: PropTypes.func,
  dispatchExpenses: PropTypes.func,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispathToProps)(Wallet);
