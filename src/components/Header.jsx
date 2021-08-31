import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;

    return (
      <header data-testid="email-field">
        <h3>
          Email:
          <span>{` ${email}`}</span>
        </h3>

        <div data-testid="total-field">
          <p>Despesa total: 0</p>
        </div>

        <div data-testid="header-currency-field">
          <p>Câmbio: BRL</p>
        </div>
      </header>
    );
  }
}

const { string } = PropTypes;

Header.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Header);
