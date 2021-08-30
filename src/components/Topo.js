import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    // const { user } = this.props;
    const { user, wallet } = this.props;
    return (
      <div className="topo">
        <h1>TrybeWallet</h1>
        <div className="infoTopo">
          <p data-testid="header-currency-field">BRL</p>

          <p>
            Despesa Total: R$
            { ' ' }
            <span data-testid="total-field">
              { wallet.total || 0 }
            </span>
          </p>

          <p data-testid="email-field">
            Email:
            { ' ' }
            { user.email }
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  wallet: PropTypes.shape({
    total: PropTypes.number,
  }),
}.isRequired;

export default connect(mapStateToProps, null)(Header);
