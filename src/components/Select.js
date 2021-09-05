import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { currencies, currency, method, tag, handleChange } = this.props;
    const getCur = Object.keys(currencies);
    getCur.splice(1, 1);

    return (
      <div>
        <label
          htmlFor="currency"
        >
          Moeda
          <select
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {getCur.map((cur) => <option value={ cur } key={ cur }>{cur}</option>)}
          </select>
        </label>
        <label
          htmlFor="method"
        >
          Método de pagamento
          <select
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label
          htmlFor="tag"
        >
          Tag
          <select id="tag" value={ tag } onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

Select.propTypes = {
  currencies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Select);
