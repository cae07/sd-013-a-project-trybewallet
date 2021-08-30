import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, options, onChange, isLoading } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select name={ name } id={ name } onChange={ onChange }>
          { options.map((optionItem) => (
            <option key={ optionItem } value={ optionItem }>
              { isLoading ? 'Carregando' : optionItem }
            </option>
          ))}
        </select>
      </label>);
  }
}

Select.defaultProps = {
  isLoading: false,
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default Select;
