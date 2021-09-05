import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { salvarStore } = this.props;
    return (
      <header className="header_Wallet" data-testid="email-field">
        <span>
          Email:
          { `${salvarStore}` }
        </span>
        <br />
        <span data-testid="total-field"> Total de gastos: 0 </span>
        <br />
        <span data-testid="header-currency-field">Cambio utilizado: BRL </span>
      </header>
    );
  }
}

Header.propTypes = {
  salvarStore: PropTypes.string.isRequired, // usei type func.no test pede para ser type string(não entendi)
};

const mapStateToProps = (state) => ({ // mapStateToProps para ler o estado no neste componente.
  salvarStore: state.user.email, // salvarStore é a action creator
});

export default connect(mapStateToProps, null)(Header);
