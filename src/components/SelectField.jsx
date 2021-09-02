import React from 'react';
import PropTypes from 'prop-types';
import htmlID from './util/util';

class SelectField extends React.Component {
  render() {
    const { name, options, onChange, value } = this.props;
    const id = htmlID(this.props);
    return (
      <label htmlFor={ id }>
        { name }
        <select
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
        >
          {options.map((option) => (
            <option key={ option + id } value={ option }>
              { option }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectField;
