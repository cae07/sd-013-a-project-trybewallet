import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Renomeio a fetchCurrencies pois foi precisar do nome dela para ser chave do meu mapDispatchToProps
import { fetchCurrencies as getCurrencies } from '../actions';

// Importo os componentes para renderizar o Wallet
import { ExpensesTable, Header, NewExpenseForm, EditExpenseForm } from '../components';

// Importando estilização do Wallet
import '../styles/Wallet.css';

class Wallet extends Component {
  // O componentDidMount é chamado imediatamente após o componente ser renderizado
  componentDidMount() {
    // Desconstroi o fetchCurrencies que está na props porque foi passado como chave no mapDispatchToProps, com o valor de disparo da action fetchCurrencies que aqui o nome dela é getCurrencies, conforme explicação na linha 5
    const { fetchCurrencies } = this.props;
    // Executo a action que dispara a busca pelas moedas na API
    fetchCurrencies();
  }

  render() {
    // isEditing é uma chave da state que é controlada conforme é executada uma action de editar ou não uma expense.
    const { isEditing } = this.props;

    return (
      <main className="wallet-main">
        {/* Renderiza o Header na página do Wallet */}
        <Header />
        { isEditing ? <EditExpenseForm /> : <NewExpenseForm />}
        <ExpensesTable />
      </main>
    );
  }
}

// A função mapStateToProps mapeia as states armazenadas na store para uma props
// Ou seja, caso eu quiser acessar os dados providos pelo reducer wallet, como o caso abaixo, eu devo acessar o caminho do state com o reducer desejado e nomear a prop que o receberá, que no caso abaixo é a isEditing
const mapStateToProps = (state) => ({
  isEditing: state.wallet.isEditing,
});

// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer.
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor.
const mapDispatchToProps = (dispatch) => ({
// A chave(fetchCurrencies) é a prop do componente que vai ser envocada
// E eu passo uma callback que vai ser o dispatch que vou realizar
// O retorno desse disparo será o novo valor dessa chave fetchCurrencies
  fetchCurrencies: () => dispatch(getCurrencies()),
});

// Faço a conexão do mapStateToProps e mapDispatchToProps com o componente Wallet
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// Faço a validação se os dados que recebi são válidos
Wallet.propTypes = {
  isEditing: PropTypes.bool,
  fetchCurrencies: PropTypes.func.isRequired,
};

// Bem semelhante ao propTypes, eu utilizo o defaultProps para definir um comportamento default, para quando uma propriedade não for informada receber algum valor em especial, no caso abaixo, a chave isEditing receber a propriedade false.
Wallet.defaultProps = {
  isEditing: false,
};
