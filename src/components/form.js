import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { moedas } = this.props;
    const arrayMoedas = Object.keys(moedas);
    const moedasFiltradas = arrayMoedas.filter((moeda) => moeda !== 'USDT');
    return (
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
            {moedasFiltradas.map((moeda, index) => (
              <option key={ index } value={ moeda }>{moeda}</option>))}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  moedas: PropTypes.object,
}.isRequired;

Form.defaultProps = { moedas: {} };

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies[0],
});

export default connect(mapStateToProps)(Form);
