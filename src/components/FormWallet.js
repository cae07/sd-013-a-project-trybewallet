import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Inputs, Select, Button } from '.';
import { requestExchange, requestCurrencies } from '../actions';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      payment: '',
      categorie: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setExpenses } = this.props;
    const { id } = this.state;
    setExpenses(this.state);
    this.setState({ id: id + 1 });
  }

  render() {
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;

    return (
      <form>
        <fieldset>
          <Inputs
            name="value"
            page="wallet"
            type="number"
            label="Valor"
            onHandleChange={ this.handleChange }
          />
          <Inputs
            name="description"
            page="wallet"
            type="text"
            label="Descrição"
            onHandleChange={ this.handleChange }
          />
          <Select
            name="currency"
            page="wallet"
            label="Moeda"
            onHandleChange={ this.handleChange }
            options={ currencies }
          />
          <Select
            name="payment"
            page="wallet"
            label="Método de pagamento"
            onHandleChange={ this.handleChange }
            options={ payment }
          />
          <Select
            name="categorie"
            page="wallet"
            label="Tag"
            onHandleChange={ this.handleChange }
            options={ tag }
          />
          <Button name="Adicionar despesa" onHandleClick={ this.handleClick } />
        </fieldset>
      </form>
    );
  }
}

FormWallet.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(requestCurrencies()),
  setExpenses: (payload) => dispatch(requestExchange(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
