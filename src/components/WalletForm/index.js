import React, { Component } from 'react';
import './WalletForm.css';
import { fetchData } from '../../actions';
import { connect } from 'react-redux';

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
    fetchData();
  }

  renderOptions() {
    return <option>option</option>;
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

          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {this.renderOptions()}
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

export default connect(mapStateToProps)(WalletForm);
