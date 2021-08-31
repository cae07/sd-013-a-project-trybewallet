import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      despesaTotal: 0,
    };
  }

  render() {
    const { stateEmail } = this.props;
    const { despesaTotal } = this.state;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            {stateEmail}
          </div>
          <div data-testid="total-field">
            Despesa Total R$
            {despesaTotal}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
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
