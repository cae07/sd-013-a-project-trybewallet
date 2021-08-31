import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { myState } = this.props;
    return (
      <>
        <span data-testid="email-field">{ myState.email }</span>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  myState: state.user.user,
})

export default connect(mapStateToProps)(Header);
