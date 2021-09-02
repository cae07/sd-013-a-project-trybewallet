import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  componentDidUpdate() {
    const { props } = this;
    console.log(props);
  }

  render() {
    console.log(this.props);
    const { emailUser } = this.props;
    return (
      <div>
        <h6 data-testid="email-field">
          {`Bem Vindo ${emailUser}`}
        </h6>
        <h6>
          Depesas totais:
        </h6>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  teste: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
