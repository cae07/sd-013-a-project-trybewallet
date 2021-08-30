import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, data } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <select name={ name } id={ name }>
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
};

export default Select;
