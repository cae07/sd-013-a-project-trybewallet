import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class FormsWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  renderCurrencyOptions() {
    const { currencies } = this.props;
    if (currencies.length > 0) {
      return Object.keys(currencies[0]).map((curr) => (
        <option key={ curr } value={ curr }>{ curr }</option>
      ));
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-value">
          Valor:
          <input type="text" name="name" id="input-value" />
        </label>

        <label htmlFor="select-currency">
          Moeda:
          <select name="currency" id="select-currency">
            { this.renderCurrencyOptions()}
          </select>
        </label>

        <label htmlFor="select-payment">
          Método de pagamento:
          <select name="payment" id="select-payment">
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
            <option value="">Dinheiro</option>
          </select>
        </label>

        <label htmlFor="select-tag">
          Tag:
          <select name="tag" id="select-tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>

        <label htmlFor="input-description">
          Descrição:
          <input type="text" name="description" id="input-description" />
        </label>

        <button type="submit">Adicionar Despesas</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

FormsWallet.propTypes = {
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
