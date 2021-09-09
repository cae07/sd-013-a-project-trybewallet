import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import SelectPagamento from '../components/SelectPagamento';
import SelectDespesa from '../components/SelectDespesa';
import './Wallet.css';
import { setCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: '',
      valor: '',
      descricao: '',
      moeda: '',
      pagamento: '',
      despesa: '',
    };
    this.getApiMoedas = this.getApiMoedas.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getApiMoedas();
  }

  onSubmit() {
    const { setStateCurrencies } = this.props;
    setStateCurrencies(this.state);
    this.setState({
      valor: '',
      descricao: '',
      moeda: '',
      pagamento: '',
      despesa: '',
    });
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { emailReducer } = this.props;
    const { loading, valor, descricao, moeda, pagamento, despesa } = this.state;
    const Loading = <h1>Loading...</h1>;
    return (
      <div>
        <Header email={ emailReducer } />
        { loading ? Loading : (
          <form className="form">
            <Input
              id="valor-input"
              value={ valor }
              text="Valor:"
              name="valor"
              handleChange={ this.handleChange }
            />
            <Input
              id="descricao-input"
              value={ descricao }
              text="Descrição:"
              name="descricao"
              handleChange={ this.handleChange }
            />
            <label htmlFor="moeda-input">
              Moeda:
              <select
                name="moeda"
                onChange={ this.handleChange }
                value={ moeda }
                id="moeda-input"
              >
                {this.getOptions()}
              </select>
            </label>
            <SelectPagamento value={ pagamento } handleChange={ this.handleChange } />
            <SelectDespesa value={ despesa } handleChange={ this.handleChange } />
            <Button onSubmit={ this.onSubmit } />
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

const mapDispatchToProps = (dispatch) => ({
  setStateCurrencies: (state) => dispatch(setCurrencies(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
