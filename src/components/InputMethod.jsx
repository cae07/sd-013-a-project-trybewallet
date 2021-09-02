import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMethod extends Component {
  render() {
    const { onChange, pay } = this.props;
    return (
      <div className="input-form pay">
        <label
          htmlFor="pay"
          className="leibol"
        >
          Método de pagamento :
          <select name="method" value={ pay } onChange={ onChange } id="pay">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

InputMethod.propTypes = {
  onChange: PropTypes.func.isRequired,
  pay: PropTypes.string.isRequired,
};

export default InputMethod;
