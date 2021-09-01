import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addWallet, wallet } from '../actions';
import FormValues from '../components/FormValues';
import FormDesc from '../components/FormDesc';
import FormCurrency from '../components/FormCurrency';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { dispatchCurrencies } = this.props;
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchApi.json();
    delete response.USDT;
    dispatchCurrencies(response);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    const { moedas } = this.props;
    this.setState({
      [name]: value,
      exchangeRates: [moedas],
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatchExpenses } = this.props;
    let { id } = this.state;
    this.setState(({ id: id += 1 }));
    dispatchExpenses(this.state);
  }

  render() {
    const { moedas } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <>
        <Header />
        <form>
          <FormValues value={ value } handleChange={ this.handleChange } />
          <FormDesc value={ description } handleChange={ this.handleChange } />
          <FormCurrency
            value={ currency }
            moedas={ moedas }
            handleChange={ this.handleChange }
          />
          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              name="method"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="">Escolha uma opção</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="">Escolha uma opção</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <input type="submit" value="Adicionar despesa" onClick={ this.handleClick } />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ moedas: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (state) => dispatch(wallet(state)),
  dispatchExpenses: (state) => dispatch(addWallet(state)),
});

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  moedas: PropTypes.objectOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
