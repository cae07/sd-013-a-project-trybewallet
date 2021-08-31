import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { emailInput } = this.props;
    const { expenses, currency } = this.state;
    return (
      <div>
        <h1>HEADER BACANUDO</h1>
        <div data-testid="email-field">{ emailInput }</div>
        <div data-testid="total-field">
          Despesas:
          { expenses }
          <div data-testid="header-currency-field">
            { currency }
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  emailInput: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
});

export default connect(mapStateToProps)(Header);
