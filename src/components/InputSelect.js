import React from 'react';
import PropTypes from 'prop-types';

function InputSelect({ label, listSelect, id }) {
  return (
    <label htmlFor={ id }>
      {`${label}`}
      <select name="select" id={ id }>
        {listSelect.map(
          (item) => <option key={ item }>{ item }</option>,
        )}
      </select>
    </label>
  );
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  listSelect: PropTypes.arrayOf().isRequired,
};
export default InputSelect;
