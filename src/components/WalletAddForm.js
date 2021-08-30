import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, updateExpenses } from '../actions';

const food = 'Alimentação';

class WalletAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: food,
      description: '',
    };

    this.renderOptions = this.renderOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async addExpense() {
    const { expensesList, getCurrencies, addExp } = this.props;
    await getCurrencies();
    const payload = { id: expensesList.length, ...this.state };
    addExp(payload);
    this.setState({
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: food,
      description: '',
    });
  }

  renderOptions(which) {
    if (which === 'currency') {
      const { currencyList } = this.props;
      if (currencyList.length > 0) {
        return Object.keys(currencyList[0]).map((c) => (
          <option key={ c } value={ c }>{ c }</option>
        ));
      }
    } else if (which === 'method') {
      const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
      return methods.map((m) => (
        <option key={ m } value={ m }>{ m }</option>
      ));
    } else if (which === 'tag') {
      const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
      return tags.map((t) => (
        <option key={ t } value={ t }>{ t }</option>
      ));
    }
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { renderOptions, handleChange, addExpense } = this;
    return (
      <form className="wallet-form">
        <label htmlFor="value" className="wallet-form-value">
          Valor:&nbsp;
          <input type="number" id="value" value={ value } onChange={ handleChange } />
        </label>
        <label htmlFor="currency" className="wallet-form-currency">
          Moeda:&nbsp;
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {renderOptions('currency')}
          </select>
        </label>

        <label htmlFor="method" className="wallet-form-method">
          Método de pagamento:&nbsp;
          <select name="method" id="method" value={ method } onChange={ handleChange }>
            {renderOptions('method')}
          </select>
        </label>
        <label htmlFor="tag" className="wallet-form-tag">
          Tag:&nbsp;
          <select name="tag" id="tag" value={ tag } onChange={ handleChange }>
            {renderOptions('tag')}
          </select>
        </label>
        <label htmlFor="description" className="wallet-form-description">
          Descrição:&nbsp;
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <button className="wallet-form-add" type="button" onClick={ addExpense }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
  expensesList: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExp: (payload) => dispatch(updateExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddForm);

WalletAddForm.propTypes = {
  currencyList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  expensesList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExp: PropTypes.func.isRequired,
};
