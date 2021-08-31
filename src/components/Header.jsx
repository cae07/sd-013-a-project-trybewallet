import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    const totalExpenses = 0;
    const headerCurrency = 'BRL';
    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        <span data-testid="total-field">
          {`Despesa Total: R$ ${totalExpenses}`}
        </span>
        <div data-testid="header-currency-field">
          {`${headerCurrency}`}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

Header.propTypes = {
  user: propTypes.objectOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
