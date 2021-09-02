import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchApi, actionGetDespenses } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.mapPropsToOption = this.mapPropsToOption.bind(this);
    this.change = this.change.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.addTwo = this.addTwo.bind(this);

    const ALIMENTAÇÃO = 'alimentação';

    this.state = {
      id: 0,
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTAÇÃO,
      description: '',

    };
  }

  componentDidMount() {
    const { fetchApi } = this.props;

    fetchApi();
  }

  mapPropsToOption() {
    const { currencies } = this.props;

    return (
      Object.keys(currencies)
        .map((currencie) => (<option key={ currencie }>{currencie}</option>)));
  }

  change({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  async addTwo() {
    const { currencies, fetchApi, add } = this.props;
    await fetchApi();
    const payload = { id: currencies.length, ...this.state };
    add(payload);
    this.setState({
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  createOptions(whichOption) {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const pagamentos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    if (whichOption === 'tag') {
      return tags.map((tag) => (<option key={ tag } value={ tag }>{ tag }</option>));
    }
    if (whichOption === 'pagamento') {
      return pagamentos.map((pagamento) => (
        <option key={ pagamento } value={ pagamento }>{ pagamento }</option>
      ));
    }
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { change, createOptions, mapPropsToOption, addTwo } = this;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input value={ value } onChange={ change } id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input value={ description } onChange={ change } id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select value={ currency } onChange={ change } id="currency">
            {mapPropsToOption()}
          </select>
        </label>
        <label htmlFor="method">
          método de pagamento
          <select
            value={ method }
            onChange={ change }
            id="method"
            aria-label="método de pagamento"
          >
            {createOptions('pagamento')}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select value={ tag } onChange={ change } id="tag">
            {createOptions('tag')}
          </select>
        </label>
        <button
          onClick={ () => addTwo(this.state) }
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesList: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(actionFetchApi()),
  add: (payload) => dispatch(actionGetDespenses(payload)),
});

Form.propTypes = {
  currencies: PropTypes.shape,
}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
