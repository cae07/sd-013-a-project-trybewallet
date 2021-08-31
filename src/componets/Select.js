import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, data, onChange, id } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <select
          name={ id }
          id={ name }
          onChange={ onChange }
        >
          {data.length > 0
            && data.map((title, index) => <option key={ index }>{title}</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
