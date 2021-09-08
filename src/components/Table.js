import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    return (
      <p>teste da tabela</p>
    );
  }
}

const mapStateToProps = (state) => ({
  walletToProps: state.wallet,
});

export default connect(mapStateToProps, null)(Table);
