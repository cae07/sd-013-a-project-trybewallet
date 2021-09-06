import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, crr) => {
      const { value, currency, exchangeRates } = crr;
      const convertion = Number(value) * (exchangeRates[currency].ask);

      return acc + convertion;
    }, 0);
    return Math.round(total * 100) / 100;
  }

  render() {
    const { user } = this.props;
    return (
      <div className="topo">
        <h1>TrybeWallet</h1>
        <div className="infoTopo">
          <p data-testid="header-currency-field">BRL</p>

          <p>
            Despesa Total: R$
            { ' ' }
            <span data-testid="total-field">
              { `${this.totalExpenses()}` }
            </span>
          </p>

          <p data-testid="email-field">
            Email:
            { ' ' }
            { user.email }
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  user,
  wallet,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
