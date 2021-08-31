import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    const { myState } = this.props;
    return (
      <>
        <span data-testid="email-field">{ myState.email }</span>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

Header.propTypes = {
  myState: PropTypes.objectOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  myState: state.user.user,
});
input-change
export default connect(mapStateToProps)(Header);
