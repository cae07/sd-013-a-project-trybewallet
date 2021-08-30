/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setInfoDespesa } from '../actions';

class FormDespesa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="formDespesa">
        <form>
          <label htmlFor="Valor">
            Valor:
            <input type="text" id="Valor" name="Valor" label="Valor" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select type="text" id="Moeda" name="Moeda" label="Moeda" />
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento:
            <select
              type="text"
              name="Método de pagamento"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Tag:
            <select type="text" id="Tag" name="Tag" label="Tag">
              <option value="Alimentação" label="Alimentação" />
              <option value="Lazer" label="Lazer" />
              <option value="Trabalho" label="Trabalho" />
              <option value="Transporte" label="Transporte" />
              <option value="Saúde" label="Saúde" />
            </select>
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" name="Descrição" label="Descrição" />
          </label>
          <button
            type="submit"
            className="btn float-right despesa_btn"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

// FormDespesa.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }).isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  dispatchSetDespesa: (infoUser) => dispatch(setInfoDespesa(infoUser)),
});

export default connect(null, mapDispatchToProps)(FormDespesa);
