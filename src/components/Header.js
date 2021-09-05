import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSum } from '../actions';

class Header extends Component {
  constructor() {
    super();

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidUpdate() {
    const { totalSum } = this.props;

    totalSum(this.sumExpenses());
  }

  sumExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((itemAcc, item) => {
      const convertedValue = item.exchangeRates[item.currency].ask;
      itemAcc += item.value * convertedValue;
      return itemAcc;
    }, 0);
  }

  render() {
    const { userEmail, totalField } = this.props;
    return (
      <div>
        <p data-testid="email-field">{`Email: ${userEmail}`}</p>
        <p data-testid="total-field">{`Despesa Total: R$${totalField}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  totalField: wallet.total,
  expenses: wallet.expenses,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  totalSum: (payload) => dispatch(getSum(payload)),
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalSum: PropTypes.func.isRequired,
  totalField: PropTypes.number,
};

Header.defaultProps = {
  totalField: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
