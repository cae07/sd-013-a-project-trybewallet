import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { string } from 'yargs';

class Forms extends React.Component {
  render() {
    const { coinName } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {coinName.map((coin) => {
                if (coin !== 'DOGE' && coin !== 'USDT') {
                  return <option key={ coin }>{ coin }</option>;
                }
                return null;
              })}
            </select>
          </label>
          <label htmlFor="cartao">
            Método de pagamento
            <select id="cartao">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            tag
            <select id="categoria">
              <option>Lazer</option>
              <option>Alimentação</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coinName: Object.keys(state.wallet.currencies),
});

Forms.propTypes = {
  coinName: PropTypes.arrayOf(string).isRequired,
};

export default connect(mapStateToProps)(Forms);
