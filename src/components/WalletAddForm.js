import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class WalletAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',

    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  renderCurrencyOptions() {
    const { currencyList } = this.props;
    if (currencyList.length > 0) {
      return Object.keys(currencyList[0]).map((c) => (
        <option key={ c } value={ c }>{ c }</option>
      ));
    }
  }

  render() {
    return (
      <form className="wallet-form">
        <label htmlFor="value" className="wallet-form-value">
          Valor:&nbsp;
          <input type="number" id="value" />
        </label>
        <label htmlFor="currency" className="wallet-form-currency">
          Moeda:&nbsp;
          <select name="currency" id="currency">
            {this.renderCurrencyOptions()}
          </select>
        </label>
        <label htmlFor="method" className="wallet-form-method">
          Método de pagamento:&nbsp;
          <select name="method" id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" className="wallet-form-tag">
          Tag:&nbsp;
          <select name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description" className="wallet-form-description">
          Descrição:&nbsp;
          <input type="text" id="description" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddForm);

WalletAddForm.propTypes = {
  currencyList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};
