import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, ExpanseTable, HeaderTable, Input, Select, Button } from '../componets';
import getApi from '../services/getCurrentExchangeApi';
import { fetchCurrentExchange, actionUpadatePurchase } from '../actions';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExchange: '',
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.get = this.get.bind(this);
    this.addPurchase = this.addPurchase.bind(this);
    this.renderWallet = this.renderWallet.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.setInputstoEdit = this.setInputstoEdit.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  componentDidUpdate(nextProps) {
    const { update } = this.props;
    if (nextProps.update !== update) {
      this.setInputstoEdit();
    }
  }

  setInputstoEdit() {
    const { expenses, id } = this.props;
    const newState = expenses.filter((a) => a.id === id)[0];
    this.setState({
      value: newState.value,
      tag: newState.tag,
      method: newState.method,
      currency: newState.currency,
      description: newState.description,
    });
    document.getElementById('valor').value = newState.value;
    document.getElementById('descrição').value = newState.description;
    document.getElementById('moeda').value = newState.currency;
    document.getElementById('método de pagamento').value = newState.method;
    document.getElementById('tag').value = newState.tag;
  }

  addPurchase() {
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

  updateItems(id) {
    const { value, description, method, tag, currency } = this.state;
    const { expenses, updatePurchase } = this.props;
    const update = expenses.reduce((acumulator, currentValue) => {
      if (currentValue.id === id) {
        return [...acumulator,
          { id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates: currentValue.exchangeRates }];
      }
      return [...acumulator, currentValue];
    }, []);
    document.getElementById('moeda').disabled = false;
    updatePurchase(update);
  }

  returnButton() {
    const { update, id } = this.props;

    const addButton = (
      <Button
        name="Adicionar despesa"
        data={ this.state }
        onClick={ this.addPurchase }
      />
    );

    const editButton = (
      <Button
        name="Editar despesa"
        data={ this.state }
        onClick={ () => this.updateItems(id) }
      />
    );
    return update ? editButton : addButton;
  }

  renderWallet() {
    const { currentExchange } = this.state;
    const onChange = ({ target }) => this.handleChenge(target);
    return (
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
        { this.returnButton() }
      </div>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        {this.renderWallet()}
        <table>
          <tbody>
            <HeaderTable />
            {expenses.length > 0 && expenses
              .map((expanse, index) => (<ExpanseTable
                key={ index }
                data={ expanse }
              />))}
          </tbody>
        </table>
      </div>
    );
  }
}

Wallet.propTypes = {
  currentExchange: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  update: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  updatePurchase: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses, update, id } }) => ({
  expenses,
  update,
  id,
});

const mapDispatchToProps = (dispatch) => ({
  currentExchange: (state) => dispatch(fetchCurrentExchange(state)),
  updatePurchase: (state) => dispatch(actionUpadatePurchase(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
