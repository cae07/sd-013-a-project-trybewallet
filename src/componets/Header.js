import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user, wallet } = this.props;
    const { email } = user;
    const { expenses } = wallet;
    return (
      <div>
        <span data-testid="email-field">{email}</span>
        {expenses !== ''
          ? <span data-testid="total-field">0</span>
          : <span data-testid="total-field">{expenses}</span>}
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  user,
  wallet,
});

export default connect(mapStateToProps)(Header);
