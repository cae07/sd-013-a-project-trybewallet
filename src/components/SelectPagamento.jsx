import React from 'react';
import PropTypes from 'prop-types';

class SelectPagamento extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="pagamento-input">
        Método de pagamento:
        <select id="pagamento-input" name="pagamento" onChange={ handleChange }>
          <option value="dinheiro"> Dinheiro </option>
          <option value="credito"> Cartão de crédito </option>
          <option value="debito"> Cartão de débito </option>
        </select>
      </label>
    );
  }
}

SelectPagamento.propTypes = {
  value: PropTypes.func,
}.isRequired;

export default SelectPagamento;
