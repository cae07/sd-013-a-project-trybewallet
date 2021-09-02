import React, { Component } from 'react';
import './wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputWallet, SelectCoin, Payment, Header,
  TagSelect, WalletTable } from '../components';
import { fetchAPI, setExpense } from '../actions';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getAPI } = this.props;
    getAPI();
  }

  // Feito com ajuda do Rogério.

  handleClick(e) {
    e.preventDefault();
    const { getAPI, expenses } = this.props;
    getAPI();
    const { currencies } = this.props;
    const { value } = document.querySelector('#valor');
    const description = document.querySelector('#descricao').value;
    const currency = document.querySelector('#currency').value;
    const method = document.querySelector('#payment').value;
    const tag = document.querySelector('#tags').value;

    expenses({
      id: this.count,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    });
    this.count += 1;
  }

  render() {
    return (
      <main>
        <Header />
        <form className="form-wallet">
          <InputWallet />
          <SelectCoin />
          <Payment />
          <TagSelect />
          <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
        <WalletTable />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAPI: () => dispatch(fetchAPI()),
  expenses: (state) => dispatch(setExpense(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies[0],
  amount: state.wallet.amount,
});

Wallet.propTypes = {
  getAPI: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
