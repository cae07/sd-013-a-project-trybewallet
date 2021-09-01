import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../../actions';
import './WalletForm.css';
import Option from '../Option/Option';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      metodo_pagamento: '',
      categoria: '',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <div>

        <form className="wallet-add-form">
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>

          <label htmlFor="descricao">
            Descrição
            <input name="descricao" type="text" id="descricao" />
          </label>

          <label name="moeda" htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              <Option />
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de Pagamento
            <select name="pagamento" id="pagamento">
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Dinheiro</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchData()),
});

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
