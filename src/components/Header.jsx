import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { myLogin: { email } } = this.props;

    return (
      <>
        <span data-testid="email-field">{ email }</span>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">0</p>
      </>
    );
  }
}

Header.propTypes = {
  myLogin: PropTypes.objectOf(PropTypes.shape({
    email: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  myLogin: state.user,
});

export default connect(mapStateToProps)(Header);
