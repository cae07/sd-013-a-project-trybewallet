import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loadingGif from '../img/loading.gif';
import trash from '../img/trash.png';
import pencil from '../img/pencil.png';

import { dispatchDeleteRow, dispatchEditList } from '../actions';

class MapOfTableItens extends Component {
  constructor(props) {
    super(props);

    this.deleteRowClick = this.deleteRowClick.bind(this);
  }

  deleteRowClick(id, multiplyValue) {
    const { deleteRow } = this.props;
    deleteRow(id, multiplyValue);
  }

  render() {
    const { expenses, isFetching, editExpenses } = this.props;
    const loading = <tr><td><img src={ loadingGif } alt="Loading" /></td></tr>;
    const emptyWallet = <tr><td>Sua carteira está vazia</td></tr>;
    if (expenses.length === 0) return (emptyWallet);
    return (isFetching) ? loading : (
      expenses.map(({
        exchangeRates, currency, value, id, description, tag, method,
      }) => {
        const exchange = exchangeRates[currency];
        const nameExpend = exchange.name.split('/')[0];
        const askExchange = Number(exchange.ask).toFixed(2);
        const multiplyValue = (value * exchange.ask).toFixed(2);
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ nameExpend }</td>
            <td>{ askExchange }</td>
            <td>{ multiplyValue }</td>
            <td>Real</td>
            <td>
              <button
                onClick={ () => this.deleteRowClick(id, multiplyValue) }
                data-testid="delete-btn"
                type="button"
              >
                <img style={ { width: '40px' } } src={ trash } alt="delete" />
              </button>
              <button
                onClick={ () => editExpenses(id) }
                data-testid="edit-btn"
                type="button"
              >
                <img style={ { width: '40px' } } src={ pencil } alt="edit" />
              </button>
            </td>
          </tr>
        );
      })
    );
  }
}

const mapStateToProps = (storeState) => ({
  expenses: storeState.wallet.expenses,
  isFetching: storeState.wallet.isFetching,
});

const mapDispathToProps = (dispatch) => ({
  deleteRow: (id, multiplyValue) => dispatch(dispatchDeleteRow(id, multiplyValue)),
  editExpenses: (id) => dispatch(dispatchEditList(id)),
});

MapOfTableItens.propTypes = {
  expenses: PropTypes.array,
  isFetching: PropTypes.bool,
  deleteRow: PropTypes.func,
}.isRequired;

export default connect(
  mapStateToProps, mapDispathToProps,
)(MapOfTableItens);
