import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      totalExpense: 0,
    };
  }

  render() {
    const { props: { email }, state: { totalExpense } } = this;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ totalExpense }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.defaultProps = {
  email: '',
};

Header.propTypes = {
  email: PropTypes.string,
};

export default connect(mapStateToProps, null)(Header);
