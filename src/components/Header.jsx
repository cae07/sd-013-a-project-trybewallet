import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { myLogin: { email } } = this.props;

    return (
      <div className="header-wallet">
        <span id="header-section" data-testid="email-field">{ email }</span>
        <div className="p-header">
          <p
            id="header-section"
            className="brl"
            data-testid="header-currency-field"
          >
            BRL
          </p>
          <p
            id="header-section"
            data-testid="total-field"
            className="total-header"
          >
            0
          </p>
        </div>
      </div>
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
