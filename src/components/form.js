import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { fetchValues, addExpansesAction } from '../actions/index';
import Table from './table';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  handler(e) {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  }

  handlerSubmit() {
    const { fetch } = this.props;
    fetch();

    const { expenses, id } = this.props;
    expenses(this.state, id);
  }

  select() {
    return (
      <div>
        <label htmlFor="Metodo-Pagamento">
          Método de pagamento
          <select id="Metodo-Pagamento" name="method" onChange={ (e) => this.handler(e) }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ (e) => this.handler(e) }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="Val">
          Valor
          <input id="Val" type="text" name="value" onChange={ (e) => this.handler(e) } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            name="description"
            type="text"
            onChange={ (e) => this.handler(e) }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda" name="currency" onChange={ (e) => this.handler(e) }>
            {
              Object.values(currencies).filter((item) => item.codein !== 'BRLT')
                .map((e, index) => <option key={ index }>{e.code}</option>)
            }
          </select>
        </label>
        {this.select()}
        <button
          type="button"
          onClick={ () => this.handlerSubmit() }
        >
          Adicionar despesa
        </button>
        <Table />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (state) => dispatch(fetchValues(state)),
  expenses:
  (payload, id) => dispatch(addExpansesAction(payload, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  fetch: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.object),
}.isRequired;
