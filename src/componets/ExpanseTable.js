import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDeletePurchaseItems } from '../actions';

class ExpanseTable extends Component {
  constructor() {
    super();
    this.deletePurchase = this.deletePurchase.bind(this);
  }

  deletePurchase(id) {
    const { expenses, deletePurchase } = this.props;
    const newList = expenses.filter((a) => a.id !== id);
    deletePurchase(newList);
  }

  render() {
    const { data: {
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates,
      id,
    } } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${parseFloat(value)}`}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{parseFloat(exchangeRates[currency].ask * value).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <input
            data-testid="delete-btn"
            type="button"
            value="excluir"
            onClick={ () => this.deletePurchase(id) }
          />
        </td>
      </tr>
    );
  }
}

ExpanseTable.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.number,
    exchangeRates: PropTypes.shape({}),
  }).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  deletePurchase: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletePurchase: (newList) => dispatch(actionDeletePurchaseItems(newList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpanseTable);
