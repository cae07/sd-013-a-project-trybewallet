import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { valueCambio } from '../actions';

class FormWallet extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies);

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" />
        </label>
        <label htmlFor="coins">
          Moeda
          <select name="coins">
            {arrayCurrencies.map((state, index) => (
              <option
                key={ arrayCurrencies[index] }
                value={ arrayCurrencies[index] }
              >
                { arrayCurrencies[index] }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

FormWallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.walletReducer.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (wallet) => dispatch(valueCambio(wallet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
