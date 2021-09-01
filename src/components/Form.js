import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { walletAction } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.handleSetState = this.handleSetState.bind(this);
  }

  componentDidMount() {
    // const { dispatchWalletAction } = this.props;
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        this.handleSetState(Object.keys(data));
      });
  }

  handleSetState(data) {
    this.setState({
      currencies: data,
    });
  }

  render() {
    const { state: { currencies } } = this;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            { currencies.map((coin) => <option key={ coin }>{ coin }</option>)}
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento
          <select id="pay-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

// const mapDispatchToProps = () => (dispatch) => {
//   dispatchWalletAction: (state) => dispatch(walletAction(state));
// };

// Form.propTypes = {
//   dispatchWalletAction: PropTypes.func.isRequired,
// };

export default Form;
