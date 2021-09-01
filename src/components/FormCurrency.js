import React from 'react';
import PropTypes from 'prop-types';

class FormCurrency extends React.Component {
  render() {
    const { value, handleChange, moedas } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          onChange={ handleChange }
          value={ value }
        >
          <option value="">Escolha uma opção</option>
          {Object.values(moedas)
            .map(
              ({ code }) => <option key={ code } value={ code }>{ code }</option>,
            )}
        </select>
      </label>
    );
  }
}

FormCurrency.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  moedas: PropTypes.objectOf(Object).isRequired,
};

export default FormCurrency;
