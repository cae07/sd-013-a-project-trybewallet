import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { totalExpensesBRL } } = this.props;
    const headerCurrency = 'BRL';
    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        <span data-testid="total-field">
          {totalExpensesBRL ? `Despesa Total: R$ ${totalExpensesBRL}`
            : 'Despesa Total: R$ 0' }
        </span>
        <span data-testid="header-currency-field">
          {` ${headerCurrency}`}
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

Header.propTypes = {
  user: propTypes.objectOf(propTypes.string).isRequired,
  wallet: propTypes.shape({
    totalExpensesBRL: propTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
