import React from 'react';
import PropTypes from 'prop-types';

// class SelectWallet extends React.Component {
//   render() {
//     const { label, name, id, value, onChange } = this.props;
//     return (
//       <label htmlFor={ name }>
//         { label }
//         <select
//           name={ name }
//           id={ id }
//           value={ value }
//           onChange={ onChange }
//         >
//           <option value="teste">Teste</option>
//         </select>
//       </label>
//     );
//   }
// }

const SelectWallet = ({ label, name, id, value, onChange, children }) => (
  <label htmlFor={ name }>
    { label }
    <select
      name={ name }
      id={ id }
      value={ value }
      onChange={ onChange }
    >
      { children }
    </select>
  </label>
);

SelectWallet.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SelectWallet;

// https://learnersbucket.com/examples/react/create-select-dropdown-in-react/

// Gabarito do exercicio do dia 12.1

// https://www.youtube.com/watch?v=IfN8F5cz7ZA

// Children validation
// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
