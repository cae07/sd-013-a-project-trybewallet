// 5.1.1 - imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 5.1.2 - criar o header
class HeaderMail extends React.Component {
  render() {
    const { stateUserEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ stateUserEmail }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

HeaderMail.propTypes = {
  stateUserEmail: PropTypes.string.isRequired,
};
// 5.1.3 - connectar
const mapStateToProps = (state) => ({
  stateUserEmail: state.user.email,
});

export default connect(mapStateToProps)(HeaderMail);
