import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { email, totalValue } = this.props;
    const { totalExpenses } = this.state;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{totalValue}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
