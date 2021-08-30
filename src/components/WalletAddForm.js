import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletAddForm extends Component {
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
            <option value="nsei">batata</option>
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

// const mapStateToProps = (state) => ({
//   userEmail: state.user.email,
//   total: state.wallet.total,
// });

export default connect(null, null)(WalletAddForm);

// WalletAddForm.propTypes = {
//   userEmail: PropTypes.string.isRequired,
//   total: PropTypes.number,
// };

// WalletAddForm.defaultProps = {
//   total: 0,
// };
