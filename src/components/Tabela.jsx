import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderTable from './HeaderTable';
import { removeList } from '../actions/walletActions';

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
      <table>
        <thead>
          <HeaderTable />
        </thead>
        <tbody>
          { despesas.map((desp, index) => (
            <tr key={ index }>
              <td>{desp.description}</td>
              <td>{desp.tag}</td>
              <td>{desp.method}</td>
              <td>{desp.value}</td>
              <td>
                {
                  desp.exchangeRates[desp.currency]
                    .name === 'Dólar Americano/Real Brasileiro' ? 'Dólar Comercial' : desp
                      .exchangeRates[desp.currency]
                      .name.split('/', 1)
                }
              </td>
              <td>{Number(desp.exchangeRates[desp.currency].ask).toFixed(2)}</td>
              <td>
                {
                  (Number(desp.exchangeRates[desp.currency].ask) * Number(desp.value)
                  ).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleOnClick(desp.id) }
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (payload) => dispatch(removeList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
