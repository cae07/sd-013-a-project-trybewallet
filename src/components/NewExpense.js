import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrencySelected from './CurrencySelected';
import ExpenseTag from './ExpenseTag';
import NumberInput from './NumberInput';
import PaymentMethod from './PaymentMethod';
import TextInput from './TextInput';
import { fetchAction, newExpense } from '../actions';
import '../styles/wallet.css';

class NewExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrency } = this.props;
    dispatchCurrency();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { loading, currencyList, addNewExpense, nextId } = this.props;
    const currentExpense = {
      id: nextId,
      value,
      description,
      currency,
      method,
      tag,
    };
    return (
      <div className="expenseForm">
        <form>
          <NumberInput
            handleChange={ this.handleChange }
            value={ value }
            name="value"
          />
          <TextInput
            handleChange={ this.handleChange }
            value={ description }
            name="description"
          />
          <CurrencySelected
            handleChange={ this.handleChange }
            value={ currency }
            name="currency"
            loading={ loading }
            currencyList={ currencyList }
          />
          <PaymentMethod
            handleChange={ this.handleChange }
            value={ method }
            name="method"
          />
          <ExpenseTag
            handleChange={ this.handleChange }
            value={ tag }
            name="tag"
          />
        </form>
        <button type="submit" onClick={ () => addNewExpense(currentExpense) }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

// Transforma o dispatch que busca informações da API em props, dessa forma consigo utilizar no componentDidMount
const mapDispatchToProps = (dispatch) => ({
  dispatchCurrency: () => dispatch(fetchAction()),
  addNewExpense: (expense) => dispatch(newExpense(expense)),
});

const mapStateToProps = ({ wallet }) => ({
  loading: wallet.loading,
  currencyList: wallet.currencyList,
  nextId: wallet.nextId,
});

NewExpense.propTypes = {
  dispatchCurrency: PropTypes.func.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currencyList: PropTypes.objectOf(PropTypes.object).isRequired,
  nextId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);
