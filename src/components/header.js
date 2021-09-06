import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, wallet } = this.props;
    const { expenses } = wallet;
    const { email } = user;
    const totalfield = expenses
      .reduce((acc, cur) => acc + Number(cur.value * cur
        .exchangeRates[cur.currency].ask), 0);
    const headerCurrency = 'BRL';
    return (
      <header>
        <div data-testid="email-field">
          {`Email: ${email}`}
        </div>
        <span data-testid="total-field">
          {`Despesa Total: R$ ${totalfield.toFixed(2)}`}
        </span>
        <div data-testid="header-currency-field">
          {`Câmbio Utilizado: ${headerCurrency}`}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

Header.propTypes = {
  user: propTypes.objectOf(propTypes.string).isRequired,
  wallet: propTypes.objectOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
