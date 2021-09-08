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
          {(!options.length ? [] : options).map((option, index) => (
            <option key={ index + id } value={ option.code || option }>
              { option.code || option }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.object, PropTypes.string],
    ),
  ).isRequired,
};

export default SelectField;
