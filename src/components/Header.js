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
    const { wallet } = this.props;
    console.log(wallet.arrayValueExpenses);
    if (wallet.arrayValueExpenses) {
      return wallet.arrayValueExpenses
        .map((expense) => parseFloat(expense))
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2);
    }
    return 0;
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
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    arrayValueExpenses: PropTypes.shape({
      map: PropTypes.func,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Header);
