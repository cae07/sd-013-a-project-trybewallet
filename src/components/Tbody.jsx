import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Tbody extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { getExpenses } = this.props;

    return (
      <div>
        {getExpenses.map((expense) => {
          const {
            id,
            currency,
            description,
            tag,
            method,
            value,
            exchangeRates,
          } = expense;

          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{(exchangeRates[currency].name).split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          );
        })}
      </div>
    );
  }
}

const { arrayOf, object } = PropTypes;

Tbody.propTypes = {
  getExpenses: arrayOf(object),
}.isRequired;

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Tbody);
