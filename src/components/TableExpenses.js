import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class TableExpenses extends React.Component {
  test() {
    const { listExpenses } = this.props;

    return listExpenses
      .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
        const valNumber = parseFloat(value);
        const atualValue = parseFloat(exchangeRates[currency].ask);
        const currencyConvert = (atualValue * valNumber).toFixed(2);
        return (
          <tr key={ id }>
            <td>{id + 1}</td>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{valNumber}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{atualValue.toFixed(2)}</td>
            <td>{currencyConvert}</td>
            <td>Real</td>
          </tr>
        );
      });
  }

  render() {
    return (
      <div className="col-md-10 mx-auto">
        <table className="table table-hover">
          <thead className="text-white bg-dark text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descrição</th>
              <th scope="col">Tag</th>
              <th scope="col">Método de pagamento</th>
              <th scope="col">Valor</th>
              <th scope="col">Moeda</th>
              <th scope="col">Câmbio utilizado</th>
              <th scope="col">Valor convertido</th>
              <th scope="col">Moeda de conversão</th>
              <th scope="col">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {this.test()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({ listExpenses: wallet.expenses });

TableExpenses.propTypes = {
  listExpenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(TableExpenses);
