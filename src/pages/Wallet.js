import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WalletHeader, WalletAddForm, WalletEditForm,
  ExpensesTable } from '../components';
import './Wallet.css';
import { fetchCurrencies } from '../actions';

function Wallet({ editMode, currencyList, getCurrencies }) {
  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  // if (currencyList.length === 0) {
  //   return (
  //     <div className="wallet-loading">
  //       <h3>Buscando moedas no servidor...</h3>
  //       <p>
  //         Ps: Se demorar muito talvez o servidor esteja com problemas,
  //         melhor tentar novamente mais tarde
  //         <span role="img" aria-label="emoji">😉</span>
  //         .
  //       </p>
  //     </div>
  //   );
  // }

  if (editMode.status) {
    return (
      <>
        <WalletHeader />
        <WalletEditForm currencies={ currencyList } id={ editMode.id } />
        <ExpensesTable />
      </>
    );
  }

  return (
    <>
      <WalletHeader />
      <WalletAddForm currencies={ currencyList } />
      <ExpensesTable />
    </>
  );
}

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
  editMode: state.wallet.editMode,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  editMode: PropTypes.shape({
    status: PropTypes.bool,
    id: PropTypes.number,
  }),
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  editMode: { status: false, id: 9999 },
};
