import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, editExpense } from '../actions';
import CurrencyBox from './CurrencyBox';
import DescriptionInput from './DescriptionInput';
import ValueInput from './ValueInput';
import MethodInput from './MethodInput';
import TagInput from './TagInput';

class EditForm extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
    this.preLoad();
  }

  preLoad() {
    const { expenses, editedId } = this.props;
    const currentExpense = expenses.find((expense) => expense.id === editedId);
    this.setState({
      ...currentExpense,
      isReady: true,
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { edit } = this.props;
    const { id } = this.state;
    const expense = { ...this.state };
    delete expense.isReady;
    edit(id, expense);
  }

  render() {
    const { currencies } = this.props;
    const { currency, description, method, value, tag, isReady } = this.state;
    if (!isReady) {
      return <p>Loading</p>;
    }
    return (
      <form>
        <ValueInput
          name="value"
          handleChange={ this.handleChange }
          value={ value }
        />
        <DescriptionInput
          name="description"
          handleChange={ this.handleChange }
          value={ description }
        />
        <CurrencyBox
          currencies={ currencies }
          handleChange={ this.handleChange }
          value={ currency }
        />
        <MethodInput
          name="method"
          handleChange={ this.handleChange }
          value={ method }
        />
        <TagInput
          handleChange={ this.handleChange }
          value={ tag }
        />
        <button type="submit" onClick={ this.handleSubmit }>
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editedId: state.wallet.editedId,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrencies: () => dispatch(fetchCurrencies()),
  edit: (id, expense) => dispatch(editExpense(id, expense)),
});

EditForm.defaultProps = {
  currencies: PropTypes.object,
};

EditForm.propTypes = {
  loadCurrencies: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType(
    [PropTypes.objectOf(PropTypes.object), PropTypes.array],
  ),
  expenses: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  editedId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
