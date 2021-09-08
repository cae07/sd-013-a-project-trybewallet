import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailState, totalValue } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { emailState.email }
        </p>
        <p data-testid="total-field">
          { totalValue > 0 ? totalValue : 0 }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user,
  totalValue: state.wallet.total,
});

Header.propTypes = {
  emailState: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
