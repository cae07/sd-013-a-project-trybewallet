import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  renderSelect() {
    const { name, data, onChange, id } = this.props;

    const AddSelect = (
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

    return AddSelect;
  }

  render() {
    return this.renderSelect();
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
