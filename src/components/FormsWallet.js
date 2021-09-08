import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletForm } from '../actions';

class FormsWallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  part1() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  part2() {
    const { currencies } = this.props;
    this.valores = (y) => Object.values(currencies).find((x) => x.code === y);
    return (
      <div>

        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="moeda"
            onChange={ this.handleChange }
          >
            { Object.keys(currencies).filter((x) => x !== 'USDT')
              .map((moeda, index) => (
                <option
                  key={ index }
                  id={ index }
                >
                  { moeda }
                </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            id="payment"
            name="payment"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Saúde</option>
            <option>Transporte</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.part1() }
          { this.part2() }
        </form>
      </div>
    );
  }
}

FormsWallet.defaultProps = {
  currencies: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies[0],
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (payload) => dispatch(walletForm(payload)),
});

FormsWallet.propTypes = {
  expenses: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
