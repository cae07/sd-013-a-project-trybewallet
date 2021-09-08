import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { stateExpenses } = this.props;
    const { value, description, currency, method, tag } = stateExpenses;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de Pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              {/* <th>Câmbio utilizado</th>
              <th>Valor Convertido</th>
              <th>Moeda de Conversão</th>
              <th>Editar/Excluir</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currency}</td>
              {/* <td></td>
            <td></td>
            <td></td>
            <td></td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  stateExpenses: PropTypes.shape(({
    currency: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  stateExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
