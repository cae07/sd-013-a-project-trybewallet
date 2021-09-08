import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoeda } from '../actions';

class WalletInput extends React.Component {
  componentDidMount() {
    const { loadMoedas } = this.props;
    loadMoedas();
  }

  render() {
    const { moedas } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="" id="valor" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            { moedas && Object.keys(moedas)
              .map((key, index) => {
                if (key !== 'USDT') {
                  return <option key={ index }>{ key }</option>;
                }
                return null;
              })}
          </select>
        </label>

        <label htmlFor="pagamentos">
          Método de pagamento:
          <select name="pagamentos" id="pagamentos">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="" id="descricao" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  loadMoedas: () => dispatch(fetchMoeda()),
});

WalletInput.propTypes = {
  loadMoedas: PropTypes.func.isRequired,
  moedas: PropTypes.shape(
    PropTypes.shape({}),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletInput);

// Requisito 7 foi resolvido com a GRANDE ajuda do Vinicius Dyonisio em salas de estudos, e em mensagens privadas no slack.
