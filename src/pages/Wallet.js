import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
// import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: '',
    };
    this.getApiMoedas = this.getApiMoedas.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidMount() {
    this.getApiMoedas();
  }

  async getApiMoedas() {
    const getAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await getAPI.json();
    delete data.USDT;

    this.setState({
      result: data,
    }, () => this.setState({ loading: false }));
  }

  getOptions() {
    const { result } = this.state;
    const arrayResult = Object.keys(result);
    return arrayResult
      .map((moeda, indice) => (
        <option value={ moeda } key={ indice }>{ moeda }</option>
      ));
  }

  render() {
    const { emailReducer } = this.props;
    const { loading } = this.state;
    const Loading = <h1>Loading...</h1>;

    if (loading === true) { return Loading; }
    return (
      <div>
        <Header email={ emailReducer } />
        <form id="form">
          <label htmlFor="valor-input">
            Valor:
            <input type="text" id="valor-input" name="valor" />
          </label>
          <label htmlFor="descricao-input">
            Descrição:
            <input type="text" id="descricao-input" name="descricao" />
          </label>
          <label htmlFor="moeda-input">
            Moeda:
            <select id="moeda-input">
              {this.getOptions()}
            </select>
          </label>
          <label htmlFor="pagamento-input">
            Método de pagamento:
            <select id="pagamento-input">
              <option value="dinheiro"> Dinheiro </option>
              <option value="credito"> Cartão de crédito </option>
              <option value="debito"> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="despesa-input">
            Tag:
            <select id="despesa-input">
              <option value="alimentacao"> Alimentação </option>
              <option value="lazer"> Lazer </option>
              <option value="trabalho"> Trabalho </option>
              <option value="transporte"> Transporte </option>
              <option value="saude"> Saúde </option>
            </select>
          </label>
          <Button />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  emailReducer: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
