import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas } from './actions';

class InputForm extends React.Component {
  componentDidMount() {
    const { fetchDadosProps } = this.props;
    fetchDadosProps();
  }

  render() {
    const { moedas } = this.props;
    console.log(moedas);
    return (
      <form>
        <label htmlFor="inputDespesas">
          Valor
          <input id="inputDespesas" type="number" />
        </label>
        <label htmlFor="inputDescricao">
          Descrição
          <input id="inputDescricao" type="text" />
        </label>
        <label htmlFor="currencyInput">
          Moeda
          <select id="currencyInput">
            { moedas.map((moeda) => (
              <option key={ moeda }>
                { moeda }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="paymentInput">
          Método de pagamento
          <select id="paymentInput">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tagInput">
          Tag
          <select id="tagInput">
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

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDadosProps: () => dispatch(fetchMoedas()),
});

InputForm.propTypes = {
  moedas: PropTypes.array,
}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
