import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { stateEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field"><strong>{`Email: ${stateEmail}`}</strong></p>
          <p data-testid="total-field">{`Despesa: ${0}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
