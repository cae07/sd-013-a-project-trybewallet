import { AiFillEdit } from 'react-icons/ai';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense } from '../../actions';

class EditButton extends Component {
  // create a method which edits the expense
  editExpense(e) {
    const { editExp, expenses, id } = this.props;
    e.preventDefault();

    editExp(expenses, id);
  }

  render() {
    return (
      <div className="edit-btn">
        <AiFillEdit
          data-testid="edit-btn"
          onClick={ (e) => this.editExpense(e) }
        />
      </div>
    );
  }
}

EditButton.propTypes = {
  editExp: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editExp: (payload, id) => dispatch(editExpense(payload, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
