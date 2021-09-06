import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import apiWithThunk from '../actions/actionsThunk';

class Header extends React.Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() { // Retorna o JSON com as moedas.
    const { totalExpenses } = this.props;
    totalExpenses();
  }

  handleUpdate() {
    const { expenses: { response } } = this.props;
    const getCurrencies = Object.values(response);
  }

  render() {
    const { user: { email } } = this.props;

    return (
      <header data-testid="email-field">
        <h3>
          Email:
          <span>{` ${email}`}</span>
        </h3>

        <div data-testid="total-field">
          <p>Despesa total: 0</p>
        </div>

        <div data-testid="header-currency-field">
          <p>Câmbio: BRL</p>
        </div>
      </header>
    );
  }
}

const { string } = PropTypes;

Header.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  getWalletExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  totalExpenses: () => dispatch(apiWithThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
