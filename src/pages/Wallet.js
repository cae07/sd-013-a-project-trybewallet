import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import SelectPagamento from '../components/SelectPagamento';
import SelectDespesa from '../components/SelectDespesa';
import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: '',
    };
    this.getApiMoedas = this.getApiMoedas.bind(this);
    this.getOptions = this.getOptions.bind(this);
    /*  this.handleChange = this.handleChange.bind(this); */
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

  /*   handleChange({ target }) {
    const { name, value } = target;
    console.log(value);
    console.log(name);
  } */

  render() {
    const { emailReducer } = this.props;
    const { loading } = this.state;
    const Loading = <h1>Loading...</h1>;
    return (
      <div>
        <Header email={ emailReducer } />
        { loading ? Loading : (
          <form id="form">
            <Input
              id="valor-input"
              value="teste"
              text="Valor:"
            />
            <Input
              id="descricao-input"
              value="teste2"
              text="Descrição:"
            />
            <label htmlFor="moeda-input">
              Moeda:
              <select value="moeda" id="moeda-input">
                {this.getOptions()}
              </select>
            </label>
            <SelectPagamento value="dinheiro" />
            <SelectDespesa value="value" />
            <Button />
          </form>
        )}
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
