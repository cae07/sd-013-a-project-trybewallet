import React from 'react';
import { connect } from 'react-redux';
import { tankApi } from '../actions';
import Header from './Header';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      value: 0,
      id: 0,
      description: '',
      currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchMoedas = this.fetchMoedas.bind(this);
    this.buttonAddDispesa = this.buttonAddDispesa.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
    // const { dispatchmoedas } = this.props;
    // const { currencies } = this.state;
    // dispatchmoedas(currencies);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  submitForm(e) {
    e.preventDefault();
    const { tankApi } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const estado = { id, value, description, currency, method, tag };
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    },
    () => tankApi(estado));
  }

  soma() {
    const { cotation } = this.props;
    let contador = 0;
    const { value, currency } = this.state;
     cotation.forEach(({ value, currency, exchangeRates }) => {
        if (exchangeRates[currency]) {
          contador += (Number(value) * Number(exchangeRates[currency].ask));
          return contador;
        }
        return contador;
      });
    return contador.toFixed(2);
  }

  fetchMoedas() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => {
        response.json().then((data) => {
          const moedas = (data);
          delete moedas.USDT; // com ajuda de Gabriel Gaspar e Josué
          const arrayMoedas = Object.keys(moedas); // Object.keys pega chave e key tranforma o obj. em array
          this.setState({ currencies: arrayMoedas });
        });
      });
  }
  buttonAddDispesa() {

    return (
      <span>
        <button
        type="submit"
      >
        Adicionar despesa
        </button>
      </span>
    );
  }

  render() {
    const { currencies, value, description, tag, method, } = this.state;
      return (
      <form onSubmit= { this.submitForm }>
        <Header contation = { soma }/>
        <label htmlFor="valorForm">
          Valor
          <input
            type="text"
            name="valor"
            id="valorForm"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descriçãoForm">
          Descrição
          <input
            type="text"
            id="descriçãoForm"
            name="descrição"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currencies.map((moeda, index) => (
              <option key={ index }>
                { moeda }
              </option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select id="metodo" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        { this.buttonAddDispesa() }
      </form>
    );
  }
}
Wallet.propTypes = {
  buttonExpenses: PropTypes.func,
  fetchData: PropTypes.func,
  moedas: PropTypes.shape({
    map: PropTypes.func,
  }),
  userEmail: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  cotation: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  tankApi:(state) => dispatch(tankApi(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
