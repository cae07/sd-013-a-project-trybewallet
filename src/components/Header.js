import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <div>
          <div data-testid="email-field">
            <span>Email: </span>
            { email }
          </div>
          <div data-testid="total-field">
            <span>Despesa Total: R$</span>
            { !total ? '0' : total }
          </div>
          <div data-testid="header-currency-field">
            <span>BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
