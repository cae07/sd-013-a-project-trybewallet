import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail, total } = this.props;

    return (
      <div>
        <div>
          <h3>WALLET</h3>
        </div>
        <div>
          <p data-testid="email-field">{`email: ${userEmail}`}</p>
          <div>
            <p data-testid="total-field">
              {`Despesa total: ${total}`}
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, null)(Header);
