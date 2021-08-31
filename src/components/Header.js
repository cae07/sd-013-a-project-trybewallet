import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header data-testid="email-field">
          { email }
        </header>
        <section data-testid="total-field">
          <p>Despesa total: 0</p>
        </section>
        <section data-testid="header-currency-field">
          <p>Câmbio: BRL</p>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
