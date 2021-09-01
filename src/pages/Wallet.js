import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getApiInfo } from '../actions';
import ContentTable from '../components/ContentTable';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  getTotalValue() {
    const { props: { expenses } } = this;
    if (expenses.length >= 1) {
      const total = expenses.reduce((acc, curr) => {
        const { value, currency = 'USD', exchangeRates } = curr;
        const { ask } = exchangeRates[currency];
        const expense = Number(value) * Number(ask);
        return expense + acc;
      }, 0);
      return Math.round((total + Number.EPSILON) * 100) / 100;
    }
    return 0;
  }

  render() {
    const totalValue = this.getTotalValue();

    return (
      <>
        <Header totalValue={ totalValue } />
        <Forms />
        <ContentTable />
      </>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getApiInfo()),
});

const mapStateToProps = (state) => ({
  exchangeRates: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  exchangeRates: PropTypes.shape({
    map: PropTypes.func.isRequired,
    USD: PropTypes.shape({
      code: PropTypes.string,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
