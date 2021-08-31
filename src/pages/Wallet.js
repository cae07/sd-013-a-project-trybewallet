import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    const { userEmail } = this.props;
    return (
      <header>
        <section data-testid="email-field">{userEmail}</section>
        <section data-testid="total-field">0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  render() {
    return (
      <main>
        {this.renderHeader()}
      </main>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapDispatchToProps = () => ({});
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
