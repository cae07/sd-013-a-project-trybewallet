import React from 'react';
// Requisito 7 - 7º Passo - fazer os imports necessários
import { connect } from 'react-redux'; // responsável por conectar o componente ao estado global
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
// ======================================================
import Header from '../components/Header';
import Form from '../components/Form/Form';

class Wallet extends React.Component {
  // Requisito 7 - º Passo -
  componentDidMount() {
    const { dispatchfetchCurrencies } = this.props;
    dispatchfetchCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

// Requisito 7 - º Passo - Fazer a conexão do componente com o estado global
const mapDispatchToProps = (dispatch) => ({
  dispatchfetchCurrencies: () => dispatch(fetchCurrencies()),
});

// Requisito 7 - º Passo -
Wallet.propTypes = {
  fetchApi: PropTypes.func,
}.isRequired;

// Requisito 7 - º Passo - Fazer a conexão do componente com o estado global
export default connect(null, mapDispatchToProps)(Wallet);

// Continuação do Requisito 7 'src/components/Form/SelectCoin'
