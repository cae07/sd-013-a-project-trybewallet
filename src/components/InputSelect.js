import React from 'react';
import PropTypes from 'prop-types';

function InputSelect({ label, listSelect }) {
  return (
    <label htmlFor="#">
      {`${label}`}
      <select name="select" id="#">
        {listSelect.map(
          (item) => <option key={ item }>{ item }</option>,
        )}
      </select>
    </label>
  );
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  listSelect: PropTypes.arrayOf().isRequired,
};
export default InputSelect;
