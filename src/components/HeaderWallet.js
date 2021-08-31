import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { stateEmail } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field" />
          {stateEmail}
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  stateEmail: PropTypes.sting,
}.isRequired;

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
