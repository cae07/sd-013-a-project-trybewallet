import React from 'react';
import PropTypes from 'prop-types';

class SubmitBtn extends React.Component {
  render() {
    const { name, testid, onClick } = this.props;
    return (
      <button
        date-testid={ testid }
        type="submit"
        onClick={ onClick }
      >
        { name }
      </button>
    );
  }
}

SubmitBtn.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubmitBtn;
