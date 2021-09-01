import React from 'react';
import PropTypes from 'prop-types';

class FormDesc extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          type="text"
          name="description"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

FormDesc.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormDesc;
