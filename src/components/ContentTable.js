import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentItem from './ContentItem';

class ContentTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses
          .map((expense) => (
            <ContentItem
              key={ expense.id }
              expense={ expense }
            />
          ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// ContentTable.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.object),
// };

export default connect(mapStateToProps)(ContentTable);
