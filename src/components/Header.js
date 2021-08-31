import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;

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
            <li data-testid="total-field">
              Despesa Total: R$
              {' '}
              {total === undefined ? 0 : 1}
              {' '}
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
