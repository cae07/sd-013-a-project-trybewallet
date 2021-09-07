import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
  'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
  'Editar/Excluir'];

class ExpenseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) return <div>Ainda não temos despesas registradas!</div>;
    return (
      <div>
        <table>
          <tr>
            { tableHeader.map((item, index) => <th key={ index }>{ item }</th>)}
          </tr>
          {
            expenses
              .map(
                ({ description, tag, method, value, currency, exchangeRates }, index) => (
                  <tr key={ index }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>
                      {
                        exchangeRates[currency].name
                          .slice(0, exchangeRates[currency].name.indexOf('/'))
                      }
                    </td>
                    <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                    <td>
                      {
                        (Math.round(exchangeRates[currency].ask * value * 100) / 100)
                      }
                    </td>
                    <td>Real</td>
                    <td>Editar/Excluir</td>
                  </tr>
                ),
              )
          }
        </table>
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
