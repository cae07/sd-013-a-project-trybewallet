import { AiFillCloseCircle } from 'react-icons/ai';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions';

class DeleteButton extends Component {
  handleClick() {
    const { id, expenses, delExpense } = this.props;
    const filteredExpenses = expenses.find((expense) => expense.id !== id);

    return delExpense(filteredExpenses, id);
  }

  render() {
    return (
      <div className="delete-btn">
        <AiFillCloseCircle
          data-testid="delete-btn"
          onClick={ (e) => this.handleClick(e) }
        />
      </div>
    );
  }
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (payload, id) => dispatch(deleteExpense(payload, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
