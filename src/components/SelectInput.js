import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { name, options, labelValue, changeEvent, value } = this.props;

    return (
      <label htmlFor={ name }>
        { labelValue }
        <select
          name={ name }
          value={ value }
          id={ name }
          onChange={ changeEvent }
        >
          { options.map((option) => (
            <option
              key={ option.split(' ').join('-') }
              value={ option }
            >
              { option }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelValue: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectInput;
