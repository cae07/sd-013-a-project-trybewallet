import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;
    const newTotal = (test) => (test <= 1 ? 0 : test.toFixed(2));
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li data-testid="email-field">
              Email:
              { ' ' }
              { email }
            </li>
            <li>
              <span data-testid="total-field">{`Despesa total: R$${total.toFixed(2)}`}</span>
              <span data-testid="header-currency-field">BRL</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => (
  { email: user.email,
    total: wallet.total,
  }
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,

};

export default connect(mapStateToProps)(Header);
