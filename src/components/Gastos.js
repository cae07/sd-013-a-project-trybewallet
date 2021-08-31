import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Gastos extends React.Component {
  render() {
    const { gastos } = this.props;
    return (
      <div>
        <ul>
          { gastos.length === 0
            ? null
            : gastos.map((gasto) => <li key={ gasto.id }>{ gasto.value }</li>)}
        </ul>
      </div>
    );
  }
}

Gastos.propTypes = {
  gastos: PropTypes.arrayOf('string').isRequired,
};

const mapStateToProps = (state) => ({
  gastos: state.wallet.expenses,
});

export default connect(mapStateToProps)(Gastos);
