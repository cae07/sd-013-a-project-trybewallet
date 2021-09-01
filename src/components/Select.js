import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { currencies, moeda, pagamento, tag, handleChange } = this.props;
    const getCur = Object.keys(currencies);
    getCur.splice(1, 1);

    return (
      <div>
        <label
          htmlFor="moeda"
        >
          Moeda
          <select
            id="moeda"
            value={ moeda }
            onChange={ handleChange }
          >
            {getCur.map((cur) => <option value={ cur } key={ cur }>{cur}</option>)}
          </select>
        </label>
        <label
          htmlFor="pagamento"
        >
          Método de pagamento
          <select
            id="pagamento"
            value={ pagamento }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de cŕedito">Cartão de crédito</option>
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
  moeda: PropTypes.string.isRequired,
  pagamento: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Select);
