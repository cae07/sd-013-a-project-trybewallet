import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { thunkCurrencies } from '../actions';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
      expenses: 0,
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email } = this.props;
    const { currency, expenses } = this.state;
    return (
      <header>
        <h1
          data-testid="email-field"
        >
          {email}
        </h1>
        <h1
          data-testid="header-currency-field"
        >
          {currency}
        </h1>
        <h1
          data-testid="total-field"
        >
          {expenses}
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(thunkCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
