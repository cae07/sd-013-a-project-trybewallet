import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpensesAction } from '../actions';
import WalletForm from '../components/WalletForm';
import { getCurrency, calcTotal } from '../service';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.getCurrencies = this.getCurrencies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const currencies = await getCurrency();
    this.setState({
      currencies,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { saveExpensesAction: saveExpense } = this.props;
    const { currencies } = this.state;
    const formValues = event.target.elements;
    const {
      value: { value },
      description: { value: descValue },
      currency: { value: currencyValue },
      method: { value: methodValue },
      tag: { value: tagValue },
    } = formValues;

    console.log(calcTotal(value, currencies[currencyValue]));

    saveExpense({
      value,
      description: descValue,
      currency: currencyValue,
      method: methodValue,
      tag: tagValue,
    }, calcTotal(value, currencies[currencyValue]));
  }

  render() {
    const { userEmail, total } = this.props;
    const { currencies } = this.state;

    return (
      <div>
        <header className="wallet-header">
          <div className="wallet-email">
            <span data-testid="email-field">{`Email: ${userEmail}`}</span>
            <span data-testid="total-field">{`Despesas Totais: ${total || 0}`}</span>
            <span data-testid="header-currency-field">Câmbio: BRL</span>
          </div>
        </header>
        <WalletForm handleSubmit={ this.handleSubmit } currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpensesAction: (expense, value) => dispatch(saveExpensesAction(expense, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  saveExpensesAction: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
