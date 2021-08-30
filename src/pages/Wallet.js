import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies as getCurrencies } from '../actions';
import { ExpensesTable, Header, NewExpenseForm, EditExpenseForm } from '../components';

import '../styles/Wallet.css';

class Wallet extends Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { isEditing } = this.props;
    return (
      <main className="wallet-main">
        <Header />
        { isEditing ? <EditExpenseForm /> : <NewExpenseForm />}
        <ExpensesTable />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isEditing: state.wallet.isEditing,
});

// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer.
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor.
const mapDispatchToProps = (dispatch) => ({
// A chave(fetchCurrencies) é a prop do componente que vai ser envocada
// E eu passo uma callback que vai ser o dispatch que vou realizar
// O retorno desse disparo será o novo valor dessa chave fetchCurrencies
  fetchCurrencies: () => dispatch(getCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  isEditing: PropTypes.bool,
  fetchCurrencies: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  isEditing: false,
};
