import React, { Component } from 'react';
// Requisito 7 - º Passo - fazer os imports necessários
import { connect } from 'react-redux'; // responsável por conectar o componente ao estado global
import PropTypes from 'prop-types';

class SelectCoin extends Component {
  render() {
    const { currencies } = this.props;

    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
          {
            // Requisito 7 - º Passo
            Object.keys(currencies).map((currencie, index) => {
              if (currencie !== 'USDT') {
                return <option key={ index }>{currencie}</option>;
              }
              return null;
            })
          }
        </select>
      </label>
    );
  }
}

// Requisito 7 - º Passo - Fazer a conexão do componente com o estado global
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

// Requisito 7 - º Passo -
SelectCoin.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

// Requisito 7 - º Passo - Fazer a conexão do componente com o estado global
export default connect(mapStateToProps)(SelectCoin);
