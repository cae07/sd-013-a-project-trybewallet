import PropTypes from 'prop-types';

const expensesType = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.string,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}));

export default expensesType;
