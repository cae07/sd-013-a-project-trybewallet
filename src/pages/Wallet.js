import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const Methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <>
        <Header />
        <form action="">
          <label htmlFor="value">
            Valor
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" />
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod">
              {Methods.map((method, i) => (
                <option key={ i } value={ method }>{method}</option>))}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              {tags.map((tag, i) => <option key={ i } value={ tag }>{tag}</option>)}
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default connect(null)(Wallet);
