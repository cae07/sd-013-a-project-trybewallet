import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getExchangeRates } = this.props;
    // dispara a action que vai consultar a api
    // Espera-se o retorno de um objeto
    getExchangeRates();
  }

  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getExchangeRates: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
