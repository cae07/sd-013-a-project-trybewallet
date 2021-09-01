import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputMethod from './InputMethod';
import InputMoeda from './InputMoeda';
import InputTag from './InputTag';
import InputValor from './InputValor';
import { fetchName } from '../actions/walletActions';
import InputDescricao from './InputDescricao';
import InputButton from './InputButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      valor: 0,
      pay: '',
      tag: '',
      moeda: '',
      descricao: '',
    };
    this.HandleOnChange = this.HandleOnChange.bind(this);
    this.contadorClick = this.contadorClick.bind(this);
  }

  componentDidMount() {
    const { tokens } = this.props;
    tokens();
  }

  funcSetState(param) {
    this.setState({
      moeda: param,
    });
  }

  HandleOnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  contadorClick() {
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { listTokens, enviaSpence, tokens } = this.props;
    const { valor, pay, tag, moeda, descricao } = this.state;
    return (
      <div>
        <form>
          <InputValor
            onChange={ this.HandleOnChange }
            valor={ valor }
          />
          <br />
          <InputDescricao
            onChange={ this.HandleOnChange }
            descricao={ descricao }
          />
          <br />
          <InputMoeda
            onChange={ this.HandleOnChange }
            moeda={ moeda }
            tokens={ listTokens }
          />
          <br />
          <InputMethod
            onChange={ this.HandleOnChange }
            pay={ pay }
          />
          <br />
          <InputTag
            onChange={ this.HandleOnChange }
            tag={ tag }
          />
          <br />
          <InputButton
            enviaSpence={ enviaSpence }
            state={ this.state }
            contadorClick={ this.contadorClick }
            tokens={ tokens }
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listTokens: state.wallet.currencies,
  valorAsk: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  tokens: () => dispatch(fetchName()),

});

Form.propTypes = {
  tokens: PropTypes.func.isRequired,
  // listTokens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
