import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.renderTotalField = this.renderTotalField.bind(this);
  }

  renderTotalField() {
    const { wallet: { totalExpensesBRL } } = this.props;
    if (totalExpensesBRL) {
      return (
        <span data-testid="total-field">
          {`Despesa Total: R$ ${totalExpensesBRL}`}
        </span>
      );
    }
    return (
      <span data-testid="total-field">
        Despesa Total: R$ 0
      </span>
    );
  }

  render() {
    const { user: { email } } = this.props;
    const headerCurrency = 'BRL';
    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        {this.renderTotalField()}
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
