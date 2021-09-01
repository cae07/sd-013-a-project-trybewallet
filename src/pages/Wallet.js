import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensesForm />
      </div>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  gastos: state.wallet.gastos,
  cambio: state.wallet.cambio,
});
export default connect(mapStateToProps, null)(Wallet);
