import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputMethod from './InputMethod';
import InputMoeda from './InputMoeda';
import InputTag from './InputTag';
import InputValor from './InputValor';
import { fetchName } from '../actions/walletActions';
import InputDescricao from './InputDescricao';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      pay: '',
      tag: '',
      moeda: '',
      descricao: '',
    };
    this.HandleOnChange = this.HandleOnChange.bind(this);
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

  render() {
    const { listTokens } = this.props;
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listTokens: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  tokens: () => dispatch(fetchName()),
});

Form.propTypes = {
  tokens: PropTypes.func.isRequired,
  listTokens: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
