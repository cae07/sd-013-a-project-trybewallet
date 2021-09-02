import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderTable from './HeaderTable';
import { removeList } from '../actions/walletActions';
import '../css/table.css';

class Tabela extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    const { remove } = this.props;
    console.log(id);
    remove(id);
  }

  render() {
    const { despesas } = this.props;
    return (
      <div className="container-table">
        <table>
          <thead className="table-header">
            <HeaderTable />
          </thead>
          <hr className="divisor" />
          <tbody>
            { despesas.map((desp, index) => (
              <tr key={ index } className="table-boddy">
                <td>{desp.description}</td>
                <td>{desp.tag}</td>
                <td>{desp.method}</td>
                <td className="valor">R${desp.value}</td>
                <td>
                  {
                    desp.exchangeRates[desp.currency]
                      .name === 'Dólar Americano/Real Brasileiro' ? 'Dólar Comercial' : desp
                        .exchangeRates[desp.currency]
                        .name.split('/', 1)
                  }
                </td>
                <td>R${Number(desp.exchangeRates[desp.currency].ask).toFixed(2)}</td>
                <td>R${
                    (Number(desp.exchangeRates[desp.currency].ask) * Number(desp.value)
                    ).toFixed(2)
                    }
                </td>
                <td>Real</td>
                <td>
                  <button
                    className="bttn-remove"
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleOnClick(desp.id) }
                  >
                      💣
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Tabela.propTypes = {
  remove: PropTypes.func.isRequired,
  despesas: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (payload) => dispatch(removeList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
