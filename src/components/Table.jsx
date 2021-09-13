import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './table.css';

class Table extends React.Component {
  render() {
    const { getStoreExpenses } = this.props;

    return (
      <table className="table">
        <tr className="tr">
          <th className="th th-background">Descrição</th>
          <th className="th th-tag th-background">Tag</th>
          <th className="th th-background">Método de pagamento</th>
          <th className="th th-background">Valor</th>
          <th className="th th-background">Moeda</th>
          <th className="th th-background">Câmbio utilizado</th>
          <th className="th th-background">Valor convertido</th>
          <th className="th th-background">Moeda de conversão</th>
          <th className="th th-background">Editar/Excluir</th>
        </tr>
        {getStoreExpenses.map((each, index) => (
          <tr key={ index } className="tr">
            <td className="th">{ each.description }</td>
            <td className="th">{ each.tag }</td>
            <td className="th">{ each.method }</td>
            <td className="th">{ each.value }</td>
            <td className="th">
              {(each.exchangeRates[each.currency].name).split('/')[0] }
            </td>
            <td className="th">{ Number(each.exchangeRates[each.currency].ask).toFixed(2) }</td>
            <td className="th">
              {(Number(each.value) * (each.exchangeRates[each.currency].ask)).toFixed(2)}
            </td>
            <td className="th">Real</td>
            <td className="th">
              <button type="button">Editar</button>
              <button
                onClick={ this.handleClick }
                type="button"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  getStoreExpenses: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (store) => ({
  getStoreExpenses: store.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
