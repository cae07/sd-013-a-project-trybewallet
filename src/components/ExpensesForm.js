import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectPayment from './SelectPayment';
import SelectTag from './SelectTag';
import SelectCurrencies from './SelectCurrencies';
import { setExpenses, setTotal, thunkCurrencies } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.total = this.total.bind(this);
  }

  onSubmit() {
    const { submitExpenses, getCurrencies, currencies } = this.props;
    getCurrencies();

    const values = (Object.entries(currencies)); // obtem array de objetos contendo as info de cada moeda

    const objValues = values.reduce((acc, curr) => ( // transformando em obj novamente da forma que o req pede
      { ...acc, [curr[0]]: curr[1] }
    ), {});

    const data = { ...this.state, exchangeRates: objValues };
    submitExpenses(data); // envia para o store os dados ao clicar no botão
    this.setState(({ id }) => ({
      id: id + 1,
    }));

    this.total(); // calcula o valor da despesa de acordo com a moeda informada
  }

  total() {
    const { value, currency } = this.state;
    const { currencies, sum } = this.props;
    const rates = Object.values(currencies);
    const exchangeRate = rates.find(({ code }) => code === currency).ask;
    const amount = value * exchangeRate;

    sum(amount);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label
          htmlFor="value"
        >
          Valor:
          <input
            id="value"
            value={ value }
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="description"
        >
          Descrição:
          <input
            id="description"
            value={ description }
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <SelectPayment
          value={ method }
          onChange={ this.handleChange }
        />
        <SelectCurrencies
          value={ currency }
          onChange={ this.handleChange }
        />
        <SelectTag
          value={ tag }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.onSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  submitExpenses: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  sum: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    code: PropTypes.string,
    codein: PropTypes.string,
    name: PropTypes.string,
    high: PropTypes.number,
    low: PropTypes.number,
    varBid: PropTypes.number,
    pctChange: PropTypes.number,
    bid: PropTypes.number,
    ask: PropTypes.number,
    timestamp: PropTypes.number,
    create_date: PropTypes.string,
  }),
};

ExpensesForm.defaultProps = {
  currencies: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  submitExpenses: (...payload) => dispatch(setExpenses(...payload)),
  getCurrencies: () => dispatch(thunkCurrencies()),
  sum: (total) => dispatch(setTotal(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
