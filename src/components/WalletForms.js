import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesWithThunk, setExpenses, setLoading, setSum } from '../actions';

class WalletForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.updateCurrencies = this.updateCurrencies.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderButtonAdd = this.renderButtonAdd.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
    this.sumValue = this.sumValue.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  componentDidUpdate() {
    const { dispatchisLoading } = this.props;
    let { isLoading } = this.props;
    if (isLoading === true) {
      this.fetchCurrencies();
      isLoading = false;
      dispatchisLoading(isLoading);
    }
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  updateCurrencies() {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  sumValue() {
    const { value, currency, exchangeRates } = this.state;
    let { sum } = this.props;
    const { dispatchSumValue } = this.props;
    this.updateCurrencies();
    Object.entries(exchangeRates).forEach((rate) => {
      if (rate[0] === currency) {
        sum = Math.round((value * Number(rate[1].ask) * 100)) / 100;
      }
    });
    sum = Math.round((sum) * 100) / 100;
    dispatchSumValue(sum);
  }

  submitExpense() {
    const { dispatchSetExpenses, dispatchisLoading } = this.props;
    let { isLoading } = this.props;
    const { id } = this.state;
    isLoading = true;
    dispatchisLoading(isLoading);
    this.setState({ id: id + 1 });
    this.updateCurrencies();
    this.sumValue();
    dispatchSetExpenses(this.state);
  }

  async fetchCurrencies() {
    const { getCurrenciesPayload } = this.props;
    await getCurrenciesPayload();
    this.updateCurrencies();
  }

  //= ========= Render Functions ================
  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    const { currencies } = this.props;
    const selectCur = [];
    Object.entries(currencies).map((currencie) => {
      if (currencie[0] !== 'USDT') {
        selectCur.push(currencie[0]);
        return selectCur;
      }
      return selectCur;
    });
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {selectCur.map((curr) => <option key={ curr }>{ curr }</option>)}
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
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

  renderButtonAdd() {
    return (
      <button
        type="button"
        onClick={ this.submitExpense }
      >
        Adicionar despesas
      </button>
    );
  }

  render() {
    return (
      <form>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderMethod() }
        { this.renderTag() }
        { this.renderButtonAdd() }
      </form>
    );
  }
}

WalletForms.propTypes = {
  currencies: PropTypes.shape({}).isRequired,
  sum: PropTypes.number.isRequired,
  dispatchSetExpenses: PropTypes.func.isRequired,
  dispatchSumValue: PropTypes.func.isRequired,
  dispatchisLoading: PropTypes.func.isRequired,
  getCurrenciesPayload: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  sum: state.wallet.sum,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetExpenses: (payload) => dispatch(setExpenses(payload)),
  dispatchSumValue: (payload) => dispatch(setSum(payload)),
  dispatchisLoading: (payload) => dispatch(setLoading(payload)),
  getCurrenciesPayload: () => dispatch(fetchCurrenciesWithThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForms);
