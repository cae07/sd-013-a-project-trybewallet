import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpense } from '../actions';
import CurrencyBox from './CurrencyBox';
import DescriptionInput from './DescriptionInput';
import ValueInput from './ValueInput';
import MethodInput from './MethodInput';
import TagInput from './TagInput';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
    };
  }

  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addNewExpense } = this.props;
    addNewExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <ValueInput name="value" handleChange={ this.handleChange } />
        <DescriptionInput name="description" handleChange={ this.handleChange } />
        <CurrencyBox currencies={ currencies } handleChange={ this.handleChange } />
        <MethodInput name="method" handleChange={ this.handleChange } />
        <TagInput handleChange={ this.handleChange } />
        <button type="submit" onClick={ this.handleSubmit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrencies: () => dispatch(fetchCurrencies()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

ExpenseForm.defaultProps = {
  currencies: [],
};

ExpenseForm.propTypes = {
  loadCurrencies: PropTypes.func.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape(
    {},
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
