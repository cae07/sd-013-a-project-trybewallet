import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderForm from '../components/HeaderForm';
import { fetchCurrencesAction } from '../actions';

// const TWO_SECONDS = 2000;

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expensesValue: 0,
      expenses: {
        currency: 'USD',
        value: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrences } = this.props;
    fetchCurrences();
  }

  componentWillUnmount() {
  }

  handleChange({ target: { value, name = '' } }, option = false) {
    const { expenses: { currency } } = this.state;
    if (option) {
      return this.setState((prevState) => ({
        expenses: {
          ...prevState.expenses,
          [currency]: value,
        },
      }));
    }
    return this.setState((prevState) => ({
      expenses: {
        ...prevState.expenses,
        [name]: value,
      },
    }));
  }

  render() {
    const { email } = this.props;
    const { expensesValue, expenses: { currency, value } } = this.state;
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          {email}
        </span>
        <span data-testid="total-field">
          { expensesValue }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
        <HeaderForm
          currencyValue={ currency }
          valueCost={ value }
          handleChange={ this.handleChange }
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currences,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrences: () => dispatch(fetchCurrencesAction()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrences: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
