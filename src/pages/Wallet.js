import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Input, Select, Button } from '../componets';
import getApi from '../services/getCurrentExchangeApi';
import { fetchCurrentExchange } from '../actions';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currentExchange: '',
      id: 0,
    };
    this.get = this.get.bind(this);
    this.setID = this.setID.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  setID() {
    const { currentExchange } = this.props;
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    currentExchange(this.state);
  }

  async get() {
    this.setState({
      currentExchange: Object.keys(await getApi())
        .filter((a) => a !== 'USDT'),
    });
  }

  handleChenge(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currentExchange } = this.state;
    const onChange = ({ target }) => this.handleChenge(target);
    return (
      <div>
        <Header />
        <div>
          <Input
            name="valor"
            type="number"
            id="value"
            onChange={ onChange }
          />
          <Input
            name="descrição"
            type="text"
            id="description"
            onChange={ onChange }
          />
          <Select
            name="moeda"
            id="currency"
            data={ currentExchange }
            onChange={ onChange }
          />
          <Select
            name="método de pagamento"
            id="method"
            data={ paymentMethod }
            onChange={ onChange }
          />
          <Select
            name="tag"
            id="tag"
            data={ category }
            onChange={ onChange }
          />
          <Button name="Adicionar despesa" state={ this.state } onClick={ this.setID } />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  currentExchange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currentExchange: (state) => dispatch(fetchCurrentExchange(state)),
});

export default connect(null, mapDispatchToProps)(Wallet);
