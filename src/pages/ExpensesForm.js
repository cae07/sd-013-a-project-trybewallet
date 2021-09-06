/* import PropTypes from 'prop-types';
import React from 'react';
/* import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    };
    this.change = this.change.bind(this);
    this.funSendEx = this.change.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  change({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  funSendEx() {
    const { value, description, currency, method, tag, id } = this.state;
    const { sendExpen } = this.props;
    this.setState = {
      id: id + 1,
    };
    sendExpen({ value, description, currency, method, tag });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { test } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input onChange={ this.change } id="value" type="text" value={ value } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.change }
            id="description"
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select onChange={ this.change } value={ currency } id="currency">
            {test.map((moeda) => (
              <option
                key={ moeda }
                value={ moeda }
              >
                {moeda}
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.change } value={ method } id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option selected value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.change } value={ tag } id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option selected value="Trabalho">Trabalho</option>
            <option selected value="Transporte">Transporte</option>
            <option selected value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
  sendExpen: PropTypes.func.isRequired,
  test: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  test: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrencies()),
  sendExpen: (payload) => dispatch(sendExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
 */
