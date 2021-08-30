import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link exact to="/">HOME</Link>
            </li>
            <li data-testid="email-field">
              Email:
              { ' ' }
              { email }
            </li>
            <li data-testid="total-field">
              Despesa Total: R$ 0
              { ' ' }
              <span data-testid="header-currency-field">BRL</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
